import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // cart items: { product, quantity }
  const [items, setItems] = useState([])

  const addToCart = (product) => {
    setItems((prev) => {
      //TODO need const for existing products
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )}
      return [...prev, { product, quantity: 1 }]
    })}
//TODO build a change in quantity for
  const changeQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    )
  }
//add to total price
  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.product.id !== id))
  //to clear cart
  const clearCart = () => setItems([])

  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, changeQuantity, removeFromCart, clearCart, totalPrice, totalCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider, otherwise it errors out')
  return ctx
}
