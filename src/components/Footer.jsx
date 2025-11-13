function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <p className="text-gray-900 font-semibold">RentRide</p>
          <p className="mt-2">Reliable bike and car rentals for every journey.</p>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">Contact</p>
          <p className="mt-2">support@rentridex.com</p>
          <p>+1 (555) 012-3456</p>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">Legal</p>
          <p className="mt-2">Terms • Privacy • Refund Policy</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer