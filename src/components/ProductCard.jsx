import { useCart } from '../context/CartContext'

// The API sometimes returns images as '["url"]' strings, I dont know why
function getImage(product) {
  const raw = product.images?.[0] ?? ''
  const match = raw.match(/https?:\/\/[^"'\]\s]+/)
  return match ? match[0] : 'https://placehold.co/300x300?text=No+Image'
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card">
      <img
        src={getImage(product)}
        alt={product.title}
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/300x300?text=No+Image'
        }}
      />
      <h3>{product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export { getImage }
