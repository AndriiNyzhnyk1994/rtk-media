import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'

function CartIcon() {
    return (
        <div>
            <button type="button" class="relative inline-flex items-center p-1 text-sm font-medium text-center outline-none text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <MdOutlineShoppingCart size={'1.8rem'}/>
                <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center p1 justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
            </button>
        </div>
    )
}

export default CartIcon