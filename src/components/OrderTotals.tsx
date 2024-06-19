import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmout = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmout * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmout + tipAmount, [tip, order])


    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text 2xl'>Total y Propina</h2>
                <p>Subtotal a pagar:
                    <span className='font-bold'>{formatCurrency(subtotalAmout)}</span>
                </p>
                <p>Propina:
                    <span className='font-bold'> {formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar:
                    <span className='font-bold'> {formatCurrency(totalAmount)}</span>
                </p>

            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
