import { motion } from "framer-motion"

export default function LoadingScreen(){
  return (
    <motion.div
      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{delay:1.4}}
      className="fixed inset-0 bg-black text-white flex items-center justify-center text-3xl font-display z-50"
    >
      Skin Expert — Loading glow…
    </motion.div>
  )
}
