import { MapPinIcon, ArrowDownIcon } from '@heroicons/react/24/outline'

export default function RecentLocArea() {
    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Locations</h2>
            <div
                className="bg-white rounded-lg shadow-lg p-2"
                // onClick={() => {
                //     formik.setFieldValue('start_point', '42 Celebration Ave, East Village, London');
                //     formik.setFieldValue('end_point', 'Reigate Rd, Hookwood, Horley');
                // }}
            >
                <div className="flex flex-col gap-1">
                    <div className=" hover:bg-gray-50 rounded cursor-pointer transition-colors flex items-center gap-2">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        42 Celebration Ave, East Village, London
                    </div>
                    <div className="flex justify-start">
                        <ArrowDownIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className=" hover:bg-gray-50 rounded cursor-pointer transition-colors flex items-center gap-2">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        Reigate Rd, Hookwood, Horley
                    </div>
                </div>
            </div>

        </div>
    )
}