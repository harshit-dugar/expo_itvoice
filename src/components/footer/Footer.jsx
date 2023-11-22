import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mt-4'>
            <footer className="w-full">
                <div className="mx-auto w-full max-w-7xl">
                    <div className='mt-10 flex w-full flex-col justify-center border-t border-red-900 py-4 md:flex-row md:justify-center'>
                        <div className='flex sm:flex-row flex-col justify-end items-center'>                                   
                            <p>&copy; {currentYear} <a href='https://itvoice.in' className='text-red-700'>IT Voice </a>.
                            Reserved. </p>
                        </div> 
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer