"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

/** SVG icons — same as about page */
function SocialIcon({ platform }: { platform: string }) {
  switch (platform.toLowerCase()) {
    case "github":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "behance":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.598.413.27.735.63.96 1.084.224.452.336.992.336 1.627 0 .698-.156 1.29-.47 1.773-.313.48-.763.878-1.348 1.19.81.233 1.41.642 1.808 1.228.397.58.596 1.292.596 2.13 0 .7-.13 1.31-.393 1.83-.262.52-.626.95-1.09 1.29-.464.34-.996.59-1.6.75-.604.16-1.245.24-1.92.24H0V4.51l6.938-.007zm-.34 5.605c.523 0 .95-.124 1.277-.373.328-.25.49-.638.49-1.168 0-.29-.053-.535-.16-.733-.107-.2-.253-.36-.44-.477-.185-.118-.4-.2-.645-.248-.244-.048-.504-.072-.78-.072H3.24v3.07h3.358zm.156 5.836c.302 0 .586-.028.848-.086.262-.06.49-.155.684-.29.194-.136.35-.313.462-.534.113-.22.168-.495.168-.82 0-.655-.184-1.13-.553-1.424-.37-.294-.86-.44-1.47-.44H3.24v3.594h3.514zm10.46.435c.38.37.927.557 1.64.557.51 0 .95-.128 1.32-.383.37-.256.597-.526.68-.81h2.57c-.413 1.28-1.048 2.198-1.9 2.75-.854.552-1.887.828-3.1.828-.842 0-1.6-.135-2.274-.404-.673-.27-1.244-.65-1.712-1.14-.468-.49-.828-1.076-1.08-1.76-.253-.683-.38-1.43-.38-2.244 0-.788.13-1.52.39-2.19.26-.673.627-1.252 1.1-1.737.474-.486 1.045-.865 1.712-1.138.668-.273 1.403-.41 2.204-.41.9 0 1.686.174 2.358.522.67.348 1.22.82 1.65 1.414.428.594.737 1.276.924 2.046.188.77.253 1.58.196 2.43h-7.66c.04.84.29 1.46.665 1.83zM17.1 12.28c-.304-.334-.786-.5-1.44-.5-.42 0-.77.07-1.05.214-.28.142-.507.316-.682.524-.176.206-.3.43-.374.668-.072.238-.116.46-.13.664h4.29c-.076-.695-.31-1.236-.614-1.57zm-3.49-5.084h5.01V8.52h-5.01V7.196z" />
        </svg>
      );
    case "dribbble":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.048 6.37 1.73 1.35 3.92 2.16 6.303 2.16 1.37 0 2.67-.3 3.85-.78zm-8.98-2.51c.25-.42 3.28-5.443 8.518-7.17.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C9.48 13.58 4.36 13.51 3.87 13.5l-.003.12c0 2.28.87 4.35 2.26 5.92zm-2.164-7.627c.498.006 4.95.077 9.05-1.192-.512-.912-1.065-1.82-1.647-2.71C9.2 10.16 6.26 11.2 5.4 11.47c-.06.018-.12.035-.18.05l.02.6zm3.926-6.39c.86 1.41 1.65 2.857 2.187 4.323 2.768-.9 5.252-2.276 7.35-4.1C17.27 3.53 14.78 2.164 12 2.164c-1.44 0-2.82.31-4.073.855z" />
        </svg>
      );
    default:
      return <span className="text-xs">{platform[0]}</span>;
  }
}

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = teamMembers.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  const member = teamMembers[current];

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Card */}
      <div
        className="rounded-2xl p-8 text-center transition-all duration-500"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--card-border)",
          minHeight: "320px",
        }}
      >
        {/* Photo */}
        {member.photo ? (
          <div
            className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5"
            style={{
              border: "3px solid var(--card-border)",
              boxShadow: "0 6px 20px var(--shadow-glow)",
              background: member.gradient,
            }}
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={112}
              height={112}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: member.gradient }}
          >
            <span className="text-white font-display font-bold text-xl">
              {member.initials}
            </span>
          </div>
        )}

        <h3
          className="font-display text-lg font-bold mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {member.name}
        </h3>
        <div
          className="text-sm font-semibold mb-3"
          style={{ color: "var(--electric-blue)" }}
        >
          {member.role}
        </div>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          {member.shortBio}
        </p>

        {member.socials && member.socials.length > 0 && (
          <div className="flex justify-center gap-2 flex-wrap">
            {member.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card-hover)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-muted)",
                }}
                aria-label={social.platform}
                title={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background:
                i === current ? "var(--electric-blue)" : "var(--card-border)",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`Go to member ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="mt-3 mx-auto rounded-full overflow-hidden"
        style={{ height: "2px", background: "var(--card-border)", width: "80%" }}
      >
        <div
          key={current}
          className="h-full rounded-full"
          style={{
            background: "var(--electric-blue)",
            animation: "progress-bar 5s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes progress-bar {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  );
}
