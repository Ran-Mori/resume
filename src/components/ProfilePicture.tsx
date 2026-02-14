import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="mb-6 relative h-32 w-32">
      <Image
        src="/profile.png"
        alt="Profile"
        fill
        className="rounded-full border-2 border-slate-200/10 object-cover shadow-xl transition-all hover:border-green/50"
        priority
      />
    </div>
  );
}
