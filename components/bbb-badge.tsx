interface BBBBadgeProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export function BBBBadge({ size = "medium", className = "" }: BBBBadgeProps) {
  const sizeMap = {
    small: "200-42",
    medium: "250-52",
    large: "293-61",
  }

  const imageSrc = `https://seal-chicago.bbb.org/seals/blue-seal-${sizeMap[size]}-bbb-1000129430.png`

  return (
    <a
      href="https://www.bbb.org/us/il/rockford/profile/roofing-contractors/zpr-roofing-0654-1000129430/#sealclick"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`inline-block hover:opacity-80 transition-opacity ${className}`}
    >
      <img
        src={imageSrc}
        alt="ZPR Roofing BBB Business Review"
        style={{ border: 0 }}
        className="h-auto"
      />
    </a>
  )
}
