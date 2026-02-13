"use client";

export default function ProfilePicture() {
  return (
    <div className="mb-6">
      <img
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="Profile"
        className="h-32 w-32 rounded-full border-2 border-slate-200/10 object-cover shadow-xl transition-all hover:border-green/50"
        onError={(e) => {
          e.currentTarget.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
        }}
      />
    </div>
  );
}
