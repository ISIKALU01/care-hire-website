<div className="space-y-3 sm:space-y-4">
                  {/* Pickup Row - Date and Time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Pickup Date
                        </label>
                        <input
                          type="date"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>

                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Return Row - Date and Time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Return Date
                        </label>
                        <input
                          type="date"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>

                    <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                      <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                          Return Time
                        </label>
                        <input
                          type="time"
                          className="bg-white flex-1 outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Data - below the date/time rows */}
                  <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                    <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="bg-white w-full outline-none placeholder:text-gray-400 text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 h-full"
                      />
                    </div>
                  </div>

                  <div className="group flex items-stretch bg-white border-b-2 border-white/30 focus-within:border-yellow-500 transition-all">
                    <div className="bg-yellow-400 flex items-center justify-center w-10 sm:w-11 flex-shrink-0">
                      <CarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="block text-xs font-medium text-gray-600 px-2 pt-1 pb-0">
                        Car Type
                      </label>
                      <select className="bg-white w-full outline-none text-gray-900 text-sm sm:text-base px-2 pb-1.5 pt-0 min-w-0 h-full">
                        <option className="bg-white text-gray-900">
                          Select Car Type
                        </option>
                        <option className="bg-white text-gray-900">
                          Economy
                        </option>
                        <option className="bg-white text-gray-900">
                          Luxury
                        </option>
                        <option className="bg-white text-gray-900">SUV</option>
                        <option className="bg-white text-gray-900">Van</option>
                        <option className="bg-white text-gray-900">Bus</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-500 text-gray-900 py-2 sm:py-2.5 rounded font-semibold hover:bg-yellow-400 transition-all transform hover:scale-[1.02] shadow-lg mt-3 sm:mt-4 text-sm sm:text-base">
                    Search Available Vehicles
                  </button>
                </div>