import { PointsData } from "../types/data";

function PointDetailModal({
  point,
  onClose,
}: {
  point: PointsData;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-6 rounded-lg max-w-md w-full mx-4 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-cyan-400">
            Transaction Details
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-gray-400">Business:</span>
            <p className="text-white font-medium">
              {point.accountInformation.business_name}
            </p>
          </div>

          <div>
            <span className="text-gray-400">Sector:</span>
            <p className="text-white">
              {point.accountInformation.industry_sector}
            </p>
          </div>

          <div>
            <span className="text-gray-400">Amount:</span>
            <p className="text-green-400 font-bold text-lg">
              ₦{point.accountInformation.amount.toLocaleString()}
            </p>
          </div>

          <div>
            <span className="text-gray-400">Transaction ID:</span>
            <p className="text-white font-mono text-xs">
              {point.accountInformation.tran_id}
            </p>
          </div>

          <div>
            <span className="text-gray-400">Location:</span>
            <p className="text-white">
              {point.accountInformation.country} ({point.lat.toFixed(4)},{" "}
              {point.lng.toFixed(4)})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointDetailModal;
