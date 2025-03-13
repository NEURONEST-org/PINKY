import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceDetection from '@tensorflow-models/face-detection';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { Camera, Eye } from 'lucide-react';
import Sidebar from './Sidebar';



export default function Recognition() {
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<'face' | 'object'>('face');
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedObjects, setDetectedObjects] = useState<string[]>([]);

  const loadFaceDetector = async () => {
    const model = await faceDetection.createDetector(
      faceDetection.SupportedModels.MediaPipeFaceDetector,
      { runtime: 'tfjs' }
    );
    return model;
  };

  const loadObjectDetector = async () => {
    const model = await cocoSsd.load();
    return model;
  };

  const drawFaceDetections = (detections: faceDetection.Face[], ctx: CanvasRenderingContext2D) => {
    detections.forEach(detection => {
      const box = detection.box;
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;
      ctx.strokeRect(box.xMin, box.yMin, box.width, box.height);
    });
  };

  const drawObjectDetections = (predictions: cocoSsd.DetectedObject[], ctx: CanvasRenderingContext2D) => {
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      ctx.fillStyle = '#00ff00';
      ctx.fillText(
        `${prediction.class} ${Math.round(prediction.score * 100)}%`,
        x,
        y > 10 ? y - 5 : 10
      );
    });
    setDetectedObjects(predictions.map(p => p.class));
  };

  const detect = async () => {
    if (!webcamRef.current || !canvasRef.current || !webcamRef.current.video) return;

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (mode === 'face') {
      const detector = await loadFaceDetector();
      const faces = await detector.detect(video);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      drawFaceDetections(faces, ctx);
    } else {
      const detector = await loadObjectDetector();
      const predictions = await detector.detect(video);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      drawObjectDetections(predictions, ctx);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDetecting) {
      interval = setInterval(() => {
        detect();
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDetecting, mode]);

  return (
  <>
    <Sidebar/>
    <div className={` rounded-xl shadow-lg p-6 ml-80`}>
     
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setMode('face')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            mode === 'face'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Camera className="h-5 w-5 mr-2" />
          Face Recognition
        </button>
        <button
          onClick={() => setMode('object')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            mode === 'object'
              ? 'bg-purple-600 text-white'
              :  'bg-gray-100 text-gray-600'
          }`}
        >
          <Eye className="h-5 w-5 mr-2" />
          Object Recognition
        </button>
      </div>

      <div className="relative">
        <Webcam
          ref={webcamRef}
          className="w-full rounded-lg"
          mirrored
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setIsDetecting(!isDetecting)}
          className={`px-6 py-2 ${
            isDetecting ? 'bg-red-600' : 'bg-purple-600'
          } text-white rounded-lg hover:opacity-90`}
        >
          {isDetecting ? 'Stop Detection' : 'Start Detection'}
        </button>
        {mode === 'object' && detectedObjects.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {detectedObjects.map((obj, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {obj}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}