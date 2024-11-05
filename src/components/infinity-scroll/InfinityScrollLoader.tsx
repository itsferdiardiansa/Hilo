import { useRef, useCallback } from "react"
import Loader from "./Loader"

interface InfiniteScrollLoaderProps {
  hasMore: boolean
  isLoading: boolean
  loadMore: () => void
  children: React.ReactNode
}

const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({
  hasMore,
  isLoading,
  loadMore,
  children,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  const loadMoreRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return

      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      })

      if (node) observerRef.current.observe(node)
    },
    [isLoading, hasMore, loadMore],
  )

  return (
    <>
      {children}
      <div
        ref={loadMoreRef}
        style={{ height: "20px", background: "transparent" }}
      />
      {isLoading && <Loader />}
    </>
  )
}

export default InfiniteScrollLoader
