import {
  Placement,
  arrow,
  shift,
  flip,
  offset,
  autoUpdate,
  useFloating,
  FloatingPortal,
  useFocus,
  useHover,
  safePolygon,
  useDismiss,
  useRole,
  useInteractions
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ElementType, useId, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  rerenderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}

export default function Popover({
  children,
  rerenderPopover,
  className,
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end'
}: Props) {
  const [open, setOpen] = useState(initialOpen ||false)
  const arrowRef = useRef<HTMLElement>(null)
  const data = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
    transform: false,
    placement: placement
  })
  const { refs, floatingStyles, context } = data
  const id = useId()
  const focus = useFocus(context)
  const hover = useHover(context, { handleClose: safePolygon()})
  const dismiss = useDismiss(context)
  const role = useRole(context, {role: 'tooltip'})
  const {getReferenceProps, getFloatingProps } = useInteractions([focus, hover, dismiss, role])

  // const showPopover = () => {
  //   return setOpen(true)
  // }
  // const hidenPopover = () => {
  //   return setOpen(false)
  // }

  return (
    <Element className={className} ref={refs.setReference} { ...getReferenceProps()}>
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={refs.setFloating}
              style={{
                transformOrigin: `${data.middlewareData.arrow?.x}px top`,
                ...floatingStyles
              }}
              { ...getFloatingProps()}
              initial={{ opacity: 0, transform: `scale(0)` }}
              animate={{ opacity: 1, transform: `scale(1)` }}
              exit={{ opacity: 0, transform: `scale(0)` }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='absolute z-10 translate-y-[-95%] border-[11px] border-x-transparent border-t-transparent border-b-white'
                style={{
                  left: data.middlewareData.arrow?.x,
                  top: data.middlewareData.arrow?.y
                }}
              ></span>
              {rerenderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
