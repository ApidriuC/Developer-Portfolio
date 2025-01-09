import { motion } from "framer-motion";
import { SectionFrameProps } from 'types/props';

export const SectionFrame = ({ id, className, children }: SectionFrameProps) => (
    <motion.div
        id={id}
        className={`${className} section-motion`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
        {children}
    </motion.div>
);