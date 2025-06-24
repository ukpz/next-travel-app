export default function Spinner({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
      {label && <p className="text-white mt-2 text-sm">{label}</p>}
    </div>
  );
}
