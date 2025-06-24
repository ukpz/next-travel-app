'use client'
import { useTransferSearch } from '@/hooks/useTransferSearch';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootState, AppDispatch } from '@/lib/store';
import {
    updateRequestField,
    setFilters,
    resetTransfers,
    fetchTransfers,
} from '@/lib/store/transferSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
    const { searchTransfer } = useTransferSearch();
    const dispatch = useDispatch<AppDispatch>();
    const request = useSelector((state: RootState) => state.transfer.request);

    const validationSchema = Yup.object().shape({
        start_point: Yup.string().required('Start point is required'),
        end_point: Yup.string().required('End point is required'),
        start_time_date: Yup.string().required('Start date is required'),
        start_time_time: Yup.string().required('Start time is required'),
        trip_type: Yup.string().required('Trip type is required'),
        end_time_date: Yup.string().when(['trip_type'], {
            is: 'round',
            then: (schema) => schema.required('Return date is required'),
        }),
        end_time_time: Yup.string().when(['trip_type'], {
            is: 'round',
            then: (schema) => schema.required('Return time is required'),
        }),
    });

    const formik = useFormik({
        initialValues: request,
        validationSchema,
        onSubmit: async (values) => {
            dispatch(resetTransfers());
            dispatch(setFilters(values.filter || {}));
            dispatch(updateRequestField({ key: 'start_point', value: values.start_point }));
            dispatch(updateRequestField({ key: 'end_point', value: values.end_point }));
            dispatch(updateRequestField({ key: 'start_time_date', value: values.start_time_date }));
            dispatch(updateRequestField({ key: 'start_time_time', value: values.start_time_time }));
            dispatch(updateRequestField({ key: 'trip_type', value: values.trip_type }));
            if (values.trip_type === 'roundtrip') {
                dispatch(updateRequestField({ key: 'end_time_date', value: values.end_time_date }));
                dispatch(updateRequestField({ key: 'end_time_time', value: values.end_time_time }));
            }
            await dispatch(fetchTransfers());
        },
        enableReinitialize: true,
    });

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-4 md:p-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-1">
                    <label className="block text-md font-medium text-gray-700">Trip Type</label>
                    <div className="flex gap-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="trip_type"
                                value="oneway"
                                checked={formik.values.trip_type === 'oneway'}
                                onChange={formik.handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">One Way</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="trip_type"
                                value="round"
                                checked={formik.values.trip_type === 'roundtrip'}
                                onChange={formik.handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">Round Trip</span>
                        </label>
                    </div>
                </div>

                <div className='mb-1'>
                    <label className="block text-md font-medium text-gray-700 mb-1">
                        Start Point
                    </label>
                    <input
                        type="text"
                        name="start_point"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.start_point}
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    // className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formik.touched.start_point && formik.errors.start_point && (
                        <div className="text-red-500 text-xs ">{formik.errors.start_point}</div>
                    )}
                </div>

                <div className='mb-1'>
                    <label className="block text-md font-medium text-gray-700 mb-1">
                        End Point
                    </label>
                    <input
                        type="text"
                        name="end_point"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.end_point}
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {formik.touched.end_point && formik.errors.end_point && (
                        <div className="text-red-500 text-sm">{formik.errors.end_point}</div>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 mb-1">
                    <div className="flex-1">
                        <label className="block text-md font-medium text-gray-700 mb-1">
                            Start Date
                        </label>
                        <input
                            type="date"
                            name="start_time_date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.start_time_date}
                            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                        {formik.touched.start_time_date && formik.errors.start_time_date && (
                            <div className="text-red-500 text-sm ">{formik.errors.start_time_date}</div>
                        )}
                    </div>

                    <div className="flex-1">
                        <label className="block text-md font-medium text-gray-700 mb-1">
                            Start Time
                        </label>
                        <input
                            type="time"
                            name="start_time_time"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.start_time_time}
                            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                        {formik.touched.start_time_time && formik.errors.start_time_time && (
                            <div className="text-red-500 text-sm ">{formik.errors.start_time_time}</div>
                        )}
                    </div>
                </div>

                {formik.values.trip_type === 'roundtrip' && (
                    <div className="flex flex-wrap gap-4 mb-1">
                        <div className="flex-1">
                            <label className="block text-md font-medium text-gray-700 mb-1">
                                Return Date
                            </label>
                            <input
                                type="date"
                                name="end_time_date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.end_time_date}
                                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {formik.touched.end_time_date && formik.errors.end_time_date && (
                                <div className="text-red-500 text-sm ">{formik.errors.end_time_date}</div>
                            )}
                        </div>

                        <div className="flex-1">
                            <label className="block text-md font-medium text-gray-700 mb-1">
                                Return Time
                            </label>
                            <input
                                type="time"
                                name="end_time_time"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.end_time_time}
                                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {formik.touched.end_time_time && formik.errors.end_time_time && (
                                <div className="text-red-500 text-sm">{formik.errors.end_time_time}</div>
                            )}
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 mt-3 rounded-md hover:bg-blue-700 transition-colors font-semibold text-md"
                >
                    Search Transfer
                </button>
            </form>
        </div>
    )
}