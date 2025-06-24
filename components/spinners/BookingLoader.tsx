export default function BookingLoader() {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-r-transparent" />
      <p className="mt-1 text-sm">Processing Booking...</p>
    </div>
  );
}
