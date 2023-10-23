import Image from "next/image"

const Satellite = ({ styles }) => {
  return (
    <Image
      src="/images/satellite.webp"
      alt="Satellite"
      width={512}
      height={281}
      className={styles.image}
      priority
    />
  )
}

export default Satellite
