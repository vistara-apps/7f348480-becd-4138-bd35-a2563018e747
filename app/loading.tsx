export default function Loading() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="animate-pulse space-y-6">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
            <div>
              <div className="h-5 bg-gray-700 rounded w-32 mb-1"></div>
              <div className="h-3 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
          <div className="h-10 bg-gray-700 rounded-lg w-24"></div>
        </div>

        {/* Metrics skeleton */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 bg-opacity-40 rounded-lg p-4">
              <div className="w-5 h-5 bg-gray-700 rounded mx-auto mb-2"></div>
              <div className="h-4 bg-gray-700 rounded mb-1"></div>
              <div className="h-3 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>

        {/* Tab navigation skeleton */}
        <div className="h-12 bg-gray-800 bg-opacity-40 rounded-lg"></div>

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-6 bg-gray-700 rounded w-32"></div>
            <div className="h-8 bg-gray-700 rounded w-20"></div>
          </div>
          
          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-800 bg-opacity-40 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="flex justify-between">
                <div className="h-3 bg-gray-700 rounded w-16"></div>
                <div className="h-3 bg-gray-700 rounded w-12"></div>
              </div>
              <div className="h-10 bg-gray-700 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
