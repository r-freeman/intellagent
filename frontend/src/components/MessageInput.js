import React, {useState} from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';

function MessageInput() {
    const [status, setStatus] = useState("");
    const {user} = useSelector(state => state.auth);
    const {isCreatingMessage, isTicketOpen} = useSelector(state => state.tickets);
    const dispatch = useDispatch();

    const messageLength = () => formik.values.message.length;

    const validate = values => {
        const errors = {};

        if (!values.message) {
            errors.message = 'Message is required.';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate,
        onSubmit: values => {
            dispatch(actions.tickets.createMessage(values.message))
                .then(status => {
                    formik.resetForm();
                    dispatch(actions.notifications.create({
                        type: "success",
                        title: "Message sent",
                        message: status
                    }));
                }).catch(err => {
                console.log(err);
            });
        }
    })

    const onChange = function (e) {
        formik.handleChange(e);
        setStatus("");
    };

    return (
        <div className="bg-gray-50 px-4 py-4">
            <div className="flex space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full"
                         src={user.photo}
                         alt={user.name}/>
                </div>
                <div className="min-w-0 flex-1">
                    <form>
                        <div>
                            <label htmlFor="message"
                                   className="sr-only">Send message</label>
                            <textarea id="message"
                                      name="message"
                                      rows="10"
                                      className={`${formik.errors.message
                                          ? 'border-red-500'
                                          : 'border-gray-300'} shadow-sm w-full block focus:ring-blue-400 focus:border-blue-400 text-sm rounded-md`}
                                      placeholder={`${!isTicketOpen ? 'Ticket is closed.' : 'Write a message.'}`}
                                      onChange={onChange}
                                      value={formik.values.message}
                                      maxLength={10000}
                                      disabled={!isTicketOpen}
                            />
                            {(status && formik.isValid) &&
                            <div className="flex justify-start sm:hidden my-4">
                                <div
                                    className="inline-flex items-center text-green-500">
                                    <svg className="w-6 h-6 mr-2" fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <p className="text-sm font-medium">{status}</p>
                                </div>
                            </div>
                            }
                            {formik.errors.message &&
                            <div className="flex justify-start sm:hidden my-4">
                                <div
                                    className="inline-flex items-center text-red-500">
                                    <svg className="w-6 h-6 mr-2" fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <p className="text-sm font-medium">{formik.errors.message}</p>
                                </div>
                            </div>
                            }
                        </div>
                        <div className={`${(formik.errors.message)
                            ? 'justify-end sm:justify-between'
                            : 'justify-end'} mt-3 flex items-center`}>
                            {formik.errors.message &&
                            <div className="hidden sm:flex sm:justify-start items-center">
                                <div
                                    className="inline-flex items-center text-red-500">
                                    <svg className="w-6 h-6 mr-2" fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <p className="text-sm font-medium">{formik.errors.message}</p>
                                </div>
                            </div>
                            }
                            <div className="flex items-center space-x-4">
                                {formik.dirty &&
                                <p className="text-sm text-gray-500">{messageLength()}/10000</p>
                                }
                                <button type="button"
                                        className="text-gray-400 hover:text-gray-500 focus:outline-none">
                                    <svg className="w-5 h-5"
                                         fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className={`${isTicketOpen
                                            ? 'bg-blue-500 hover:bg-blue-600'
                                            : 'bg-blue-400'} inline-flex w-36 items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
                                        onClick={formik.handleSubmit}
                                        disabled={isCreatingMessage || !isTicketOpen}>
                                    {isCreatingMessage
                                        ? <svg
                                            className="animate-spin inline-flex h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25"
                                                    cx="12"
                                                    cy="12" r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"/>
                                            <path className="opacity-75"
                                                  fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                        </svg>
                                        : <span
                                            className="h-5">Send message</span>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageInput;