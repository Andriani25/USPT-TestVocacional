import type React from "react";
import { useEffect, useRef } from "react";
import institutes from "@/utils/institutes";
import { useTestContext } from "@/context";
import { getRandomCellphone } from "@/utils/cellPhones";

// UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import robotCloud from "../assets/Cloud robotics abstract.json";
//

const Result: React.FC = function () {
  const contextData = useTestContext();

  // Context
  const scores = contextData.scores;
  const setScores = contextData.setScores;
  const recommendedInstitute = contextData.recommendedInstitute;
  const institute = contextData.institute;
  //

  console.log("SCORES IN RESULT", scores);

  const navigate = useNavigate();

  const IconComponent = institute.icon;

  const totalScore =
    scores.sociales +
    scores.medicina +
    scores.innovacion +
    scores.deportes +
    scores.disenio;

  console.log("TOTAL SCORE", totalScore);

  const resetTest = () => {
    navigate("/");
    setScores({
      medicina: 0,
      sociales: 0,
      innovacion: 0,
      deportes: 0,
      disenio: 0,
    });
  };

  // Animation Logic
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let fireworks: Firework[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // Gravity
        this.alpha -= 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    class Firework {
      x: number;
      y: number;
      targetY: number;
      vy: number;
      color: string;
      exploded: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.targetY = Math.random() * (height / 2);
        this.vy = -Math.random() * 5 - 10;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.exploded = false;
      }

      update() {
        this.y += this.vy;
        this.vy += 0.1; // Gravity
        if (this.vy >= 0 || this.y <= this.targetY) {
          this.exploded = true;
          for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!this.exploded) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
          ctx.fill();
        }
      }
    }

    // Confetti
    class Confetti {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        angle: number;
        speed: number;
        
        constructor() {
            this.x = Math.random() * width;
            this.y = -10;
            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 3 + 2;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.angle = Math.random() * 360;
            this.speed = Math.random() * 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.speed;
            if (this.y > height) {
                this.y = -10; // Recycle if still active
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.color;
            ctx.fillRect(-5, -5, 10, 10);
            ctx.restore();
        }
    }

    let confettis: Confetti[] = [];
    for(let i=0; i<100; i++) {
        confettis.push(new Confetti());
    }

    let active = true;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fireworks
      if (active && Math.random() < 0.05) {
        fireworks.push(new Firework());
      }

      fireworks.forEach((fw, index) => {
        fw.update();
        fw.draw(ctx);
        if (fw.exploded) fireworks.splice(index, 1);
      });

      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) particles.splice(index, 1);
      });

      // Confetti
      confettis.forEach((c, index) => {
          c.update();
          c.draw(ctx);
          // Stop recycling if not active and off screen
          if (!active && c.y > height) {
              confettis.splice(index, 1);
          }
      });

      if (active || fireworks.length > 0 || particles.length > 0 || confettis.length > 0) {
          animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-2 sm:p-4 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      <div className="w-full flex justify-center items-center mb-2 sm:mb-4 relative z-10">
        <Player
          autoplay
          loop
          src={robotCloud}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
      </div>
      <Card className="w-full max-w-[98vw] sm:max-w-4xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center px-2 py-3 sm:px-6 sm:py-6">
          <div
            className={`mx-auto w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${institute.color} rounded-full flex items-center justify-center mb-2 sm:mb-4`}
          >
            <IconComponent className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <CardTitle className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
            ¡Tu instituto ideal es!
          </CardTitle>
          <CardTitle
            className={`text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${institute.color} bg-clip-text text-transparent leading-tight px-1 sm:px-2`}
          >
            {institute.name}
          </CardTitle>
          <CardDescription className="text-sm sm:text-lg lg:text-xl text-gray-200 mt-2 sm:mt-4 px-1 sm:px-2 leading-relaxed">
            {institute.description}
          </CardDescription>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full px-1 sm:px-2">
            <Button
              className={`flex-1 bg-gradient-to-r ${institute.color} hover:opacity-90 active:opacity-80 text-white font-semibold py-2 sm:py-3 text-xs sm:text-base`}
            >
              <a
                className="flex flex-1 items-center justify-center"
                href={getRandomCellphone()}
                target="_blank"
              >
                ¡Habla con uno de nuestros asesores!
              </a>
            </Button>
            <Button
              className={`flex-1 bg-gradient-to-r ${institute.color} hover:opacity-90 active:opacity-80 text-white font-semibold py-2 sm:py-3 text-xs sm:text-base`}
            >
              <a
                className="flex flex-1 items-center justify-center"
                href="https://forms.gle/kadJhWimnoHTGNYn6"
                target="_blank"
              >
                ¡Completá el formulario para atención especial!
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-6 px-2 pb-3 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-5">
            {Object.entries(scores).map(([key, score]) => {
              const inst = institutes[key as keyof typeof institutes];
              const InstIcon = inst.icon;
              const percentage =
                totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;

              return (
                <div
                  key={key}
                  className={`flex-col place-content-around p-3 sm:p-4 rounded-lg ${
                    institute.name === recommendedInstitute
                      ? `bg-gradient-to-r ${inst.color} bg-opacity-30`
                      : "bg-white/10"
                  } border border-white/20`}
                >
                  <div className="flex items-center mb-2">
                    <InstIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm leading-tight">
                      {inst.name}
                    </span>
                  </div>
                  <div className="flex place-content-center text-xl sm:text-2xl font-bold">
                    {percentage}%
                  </div>
                  <Progress value={percentage} className="mt-2 h-2" />
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-lg p-3 sm:p-6">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Carreras que podrías estudiar:
            </h3>
            <div className="grid grid-cols-1 gap-1 sm:gap-3 md:grid-cols-2">
              {institute.careers.map((career, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${institute.color} mr-3 flex-shrink-0`}
                  ></div>
                  <span className="text-sm sm:text-base">{career}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-4 md:flex-row">
            <Button
              onClick={resetTest}
              variant="outline"
              className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 active:bg-white/30 py-2 sm:py-3 text-xs sm:text-base"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Repetir Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
