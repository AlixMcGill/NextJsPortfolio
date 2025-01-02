'use client';

import { kMaxLength } from "buffer";
import { useEffect, useRef } from "react";

export default function DotAnimation() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }


        const centerX: number = 12;
        const centerY: number = 12;
        const radius: number = 5;

        interface Dot {
            context: CanvasRenderingContext2D;
            draw: (xPos: number, yPos: number, radius: number, interpolatedOpacity: number) => void;
        }

        class newDot implements Dot {
            color: string;
            context: CanvasRenderingContext2D;
            constructor(contextParam: CanvasRenderingContext2D) {
                this.color = "rgba(0, 0, 0, 0.8)";
                this.context = contextParam;
            }

            draw(xPos: number, yPos: number, radius: number, interpolatedOpacity: number) {
                this.context.beginPath();
                this.context.arc(xPos, yPos, radius, 0, 2 * Math.PI);
                this.context.strokeStyle = `rgba(0, 0, 0, 0)`
                this.context.stroke();
                this.context.fillStyle = `rgba(0, 0, 0, ${interpolatedOpacity})`;
                this.context.fill();

            }
        }

            if (ctx) {
                canvas.width = canvas.offsetWidth;  // Non-null assertion for canvas
                canvas.height = canvas.offsetHeight;
            }
            const fullDotMargin = 60; // 41
            const halfDotMargin = fullDotMargin / 2;
            let dotAmountWidth = canvas.width / fullDotMargin;
            let dotAmountHeight = canvas.height / fullDotMargin;

            function fillDotArray(dotWidth: number, dotHeight: number, context: CanvasRenderingContext2D): Dot[][] {
                const dotAmount = dotWidth * dotHeight;
                let dotArray: Dot[][] = [];
                
                for (let i = 0; i < dotHeight; i++) {
                    let arr: Dot[] = [];
                    for (let j = 0; j < dotWidth; j++) {
                        const dot: Dot = new newDot(context);
                        arr.push(dot);
                    }
                    dotArray.push(arr);
                }
                return dotArray;
            }

            function normilize(value: number, max: number, min: number): number {
                const cutOff = 15;
                return 1 - (Math.floor(((value + cutOff) - min) / (max - min) * 10) / 10);
            }
            
            let dotArray = fillDotArray(dotAmountWidth, dotAmountHeight, ctx);

            function updateCanvasSize(context: CanvasRenderingContext2D) {
                if (!canvas) return;
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
    
                dotAmountWidth = canvas.width / fullDotMargin;
                dotAmountHeight = canvas.height / fullDotMargin;
    
                dotArray = fillDotArray(dotAmountWidth, dotAmountHeight, context);
            }
    
            const handleResize = () => {
                updateCanvasSize(ctx);
            };
    
            window.addEventListener('resize', handleResize);

            let startIndex: number = 0;
            const dotSizeMin = 4;
            const dotMin = 6;
            const dotSizeMid = 7;
            const dotSizeMax = 9;

            if (ctx) {
                function animation(){
                    if (!canvas) return;
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for (let i = 0; i < dotArray.length; i++) { // height 
                        for (let j = 0; j < dotArray[i].length; j ++) { // width
                            if (normilize((j + 1), dotArray[i].length, 0) > 0) {
                                if (startIndex > dotArray[i].length) startIndex = 0;
                                if (j === startIndex - 2 && startIndex -2 > 0) {
                                    dotArray[i][j].draw(fullDotMargin * (j + 1) - halfDotMargin, fullDotMargin * (i + 1) - halfDotMargin, dotMin, normilize((j + 1), dotArray[i].length, 0))
                                } else if (j === startIndex - 1 && startIndex - 1 > 0) {
                                    dotArray[i][j].draw(fullDotMargin * (j + 1) - halfDotMargin, fullDotMargin * (i + 1) - halfDotMargin, dotSizeMid, normilize((j + 1), dotArray[i].length, 0))
                                } else if (j === startIndex) {
                                    dotArray[i][j].draw(fullDotMargin * (j + 1) - halfDotMargin, fullDotMargin * (i + 1) - halfDotMargin, dotSizeMax, normilize((j + 1), dotArray[i].length, 0))
                                } else {
                                    dotArray[i][j].draw(fullDotMargin * (j + 1) - halfDotMargin, fullDotMargin * (i + 1) - halfDotMargin, dotSizeMin, normilize((j + 1), dotArray[i].length, 0))
                                }       
                            }
                        }
                    }
                    startIndex++;
                    setTimeout(() => window.requestAnimationFrame(animation), 100);
                }
                window.requestAnimationFrame(animation);
            }

    },  []);

    return (
        <canvas ref={canvasRef} className="hero-canvas"></canvas>
    );
}