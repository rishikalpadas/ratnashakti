import React, { useEffect, useRef } from 'react'

// Alpona Pattern Background Component
const SpiritualParticles = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Alpona pattern drawing functions with lighter golden colors
    const drawCircularPattern = (ctx, x, y, size, opacity, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
      gradient.addColorStop(0, 'rgba(139, 69, 19, 0.8)')
      gradient.addColorStop(0.5, 'rgba(160, 82, 45, 0.6)')
      gradient.addColorStop(1, 'rgba(205, 133, 63, 0.3)')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      
      // Central circle
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2)
      ctx.stroke()
      
      // Radiating petals
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4
        ctx.save()
        ctx.rotate(angle)
        
        // Petal shape
        ctx.beginPath()
        ctx.arc(size * 0.3, 0, size * 0.15, 0, Math.PI * 2)
        ctx.stroke()
        
        // Connecting lines
        ctx.beginPath()
        ctx.moveTo(size * 0.2, 0)
        ctx.lineTo(size * 0.45, 0)
        ctx.stroke()
        
        ctx.restore()
      }
      
      // Outer decorative circles
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6
        const x_pos = Math.cos(angle) * size * 0.6
        const y_pos = Math.sin(angle) * size * 0.6
        
        ctx.beginPath()
        ctx.arc(x_pos, y_pos, size * 0.08, 0, Math.PI * 2)
        ctx.stroke()
      }
      
      ctx.restore()
    }
    
    const drawMandalaPattern = (ctx, x, y, size, opacity, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
      gradient.addColorStop(0, 'rgba(139, 69, 19, 0.8)')
      gradient.addColorStop(0.3, 'rgba(160, 82, 45, 0.7)')
      gradient.addColorStop(0.7, 'rgba(205, 133, 63, 0.4)')
      gradient.addColorStop(1, 'rgba(210, 180, 140, 0.2)')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5
      
      // Concentric circles
      for (let r = size * 0.1; r <= size * 0.8; r += size * 0.15) {
        ctx.beginPath()
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.stroke()
      }
      
      // Geometric patterns
      for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI) / 8
        ctx.save()
        ctx.rotate(angle)
        
        // Radial lines
        ctx.beginPath()
        ctx.moveTo(size * 0.1, 0)
        ctx.lineTo(size * 0.8, 0)
        ctx.stroke()
        
        // Diamond shapes
        if (i % 2 === 0) {
          ctx.beginPath()
          ctx.moveTo(size * 0.4, size * 0.05)
          ctx.lineTo(size * 0.5, 0)
          ctx.lineTo(size * 0.4, -size * 0.05)
          ctx.lineTo(size * 0.3, 0)
          ctx.closePath()
          ctx.stroke()
        }
        
        ctx.restore()
      }
      
      ctx.restore()
    }
    
    const drawFloralPattern = (ctx, x, y, size, opacity, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      
      const gradient = ctx.createLinearGradient(-size, -size, size, size)
      gradient.addColorStop(0, 'rgba(139, 69, 19, 0.8)')
      gradient.addColorStop(0.5, 'rgba(160, 82, 45, 0.6)')
      gradient.addColorStop(1, 'rgba(205, 133, 63, 0.4)')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      
      // Central flower
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        ctx.save()
        ctx.rotate(angle)
        
        // Petal
        ctx.beginPath()
        ctx.arc(size * 0.25, 0, size * 0.15, 0, Math.PI * 2)
        ctx.stroke()
        
        // Leaf pattern
        ctx.beginPath()
        ctx.moveTo(size * 0.1, 0)
        ctx.quadraticCurveTo(size * 0.2, size * 0.1, size * 0.35, 0)
        ctx.quadraticCurveTo(size * 0.2, -size * 0.1, size * 0.1, 0)
        ctx.stroke()
        
        ctx.restore()
      }
      
      // Decorative dots
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6
        const x_pos = Math.cos(angle) * size * 0.5
        const y_pos = Math.sin(angle) * size * 0.5
        
        ctx.beginPath()
        ctx.arc(x_pos, y_pos, size * 0.03, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
      
      ctx.restore()
    }
    
    const drawGeometricPattern = (ctx, x, y, size, opacity, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      
      const gradient = ctx.createLinearGradient(-size, -size, size, size)
      gradient.addColorStop(0, 'rgba(139, 69, 19, 0.7)')
      gradient.addColorStop(0.5, 'rgba(160, 82, 45, 0.5)')
      gradient.addColorStop(1, 'rgba(205, 133, 63, 0.3)')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5
      
      // Square pattern
      const squareSize = size * 0.6
      ctx.strokeRect(-squareSize/2, -squareSize/2, squareSize, squareSize)
      
      // Inner diamond
      ctx.save()
      ctx.rotate(Math.PI / 4)
      const diamondSize = size * 0.4
      ctx.strokeRect(-diamondSize/2, -diamondSize/2, diamondSize, diamondSize)
      ctx.restore()
      
      // Diagonal lines
      ctx.beginPath()
      ctx.moveTo(-size * 0.3, -size * 0.3)
      ctx.lineTo(size * 0.3, size * 0.3)
      ctx.moveTo(size * 0.3, -size * 0.3)
      ctx.lineTo(-size * 0.3, size * 0.3)
      ctx.stroke()
      
      // Corner decorations
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        ctx.save()
        ctx.rotate(angle)
        
        ctx.beginPath()
        ctx.arc(size * 0.45, size * 0.45, size * 0.08, 0, Math.PI * 2)
        ctx.stroke()
        
        ctx.restore()
      }
      
      ctx.restore()
    }
    
    const drawSimpleDot = (ctx, x, y, size, opacity) => {
      ctx.save()
      ctx.globalAlpha = opacity
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
      gradient.addColorStop(0, 'rgba(139, 69, 19, 0.8)')
      gradient.addColorStop(0.5, 'rgba(160, 82, 45, 0.6)')
      gradient.addColorStop(1, 'rgba(205, 133, 63, 0.2)')
      
      ctx.fillStyle = gradient
      ctx.strokeStyle = 'rgba(139, 69, 19, 0.4)'
      ctx.lineWidth = 1
      
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      
      ctx.restore()
    }
    
    // Alpona Pattern class
    class AlponaPattern {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 60 + 40
        this.size = this.baseSize
        this.opacity = Math.random() * 0.3 + 0.1
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02 // Increased rotation speed
        this.pulse = Math.random() * 0.015 + 0.005 // Increased pulse speed
        this.pulseDirection = 1
        this.patternType = Math.floor(Math.random() * 5)
        this.maxOpacity = this.opacity
        this.minOpacity = 0.02
        
        // Enhanced movement properties
        this.velocityX = (Math.random() - 0.5) * 0.5 // Increased drift speed
        this.velocityY = (Math.random() - 0.5) * 0.5
        this.acceleration = 0.001
        this.maxSpeed = 1.0
        
        // Floating motion
        this.floatOffsetX = Math.random() * Math.PI * 2
        this.floatOffsetY = Math.random() * Math.PI * 2
        this.floatSpeedX = Math.random() * 0.02 + 0.01
        this.floatSpeedY = Math.random() * 0.02 + 0.01
        this.floatAmplitudeX = Math.random() * 30 + 10
        this.floatAmplitudeY = Math.random() * 30 + 10
        
        // Size pulsing
        this.sizePhase = Math.random() * Math.PI * 2
        this.sizeSpeed = Math.random() * 0.03 + 0.01
        this.sizeAmplitude = this.baseSize * 0.3
        
        // Color shifting
        this.colorPhase = Math.random() * Math.PI * 2
        this.colorSpeed = Math.random() * 0.01 + 0.005
        
        // Store original position for floating reference
        this.originX = this.x
        this.originY = this.y
        
        // Spiral motion for some particles
        this.spiralRadius = Math.random() * 50 + 20
        this.spiralAngle = Math.random() * Math.PI * 2
        this.spiralSpeed = (Math.random() - 0.5) * 0.02
        this.useSpiral = Math.random() < 0.3 // 30% chance for spiral motion
      }
      
      update() {
        // Enhanced rotation with variable speed
        this.rotation += this.rotationSpeed
        
        // Floating motion using sine waves
        this.floatOffsetX += this.floatSpeedX
        this.floatOffsetY += this.floatSpeedY
        
        if (this.useSpiral) {
          // Spiral motion around origin
          this.spiralAngle += this.spiralSpeed
          this.x = this.originX + Math.cos(this.spiralAngle) * this.spiralRadius
          this.y = this.originY + Math.sin(this.spiralAngle) * this.spiralRadius
          
          // Slowly drift the spiral center
          this.originX += this.velocityX * 0.2
          this.originY += this.velocityY * 0.2
        } else {
          // Floating motion with gentle drift
          this.x = this.originX + Math.sin(this.floatOffsetX) * this.floatAmplitudeX + this.velocityX
          this.y = this.originY + Math.cos(this.floatOffsetY) * this.floatAmplitudeY + this.velocityY
          
          // Update origin position for continuous drift
          this.originX += this.velocityX * 0.5
          this.originY += this.velocityY * 0.5
        }
        
        // Dynamic size pulsing
        this.sizePhase += this.sizeSpeed
        this.size = this.baseSize + Math.sin(this.sizePhase) * this.sizeAmplitude
        
        // Enhanced opacity pulsing
        this.opacity += this.pulse * this.pulseDirection
        if (this.opacity >= this.maxOpacity || this.opacity <= this.minOpacity) {
          this.pulseDirection *= -1
        }
        
        // Color phase for subtle color variations
        this.colorPhase += this.colorSpeed
        
        // Wrap around edges with updated origin
        if (this.originX > canvas.width + this.size) {
          this.originX = -this.size
          this.x = this.originX
        }
        if (this.originX < -this.size) {
          this.originX = canvas.width + this.size
          this.x = this.originX
        }
        if (this.originY > canvas.height + this.size) {
          this.originY = -this.size
          this.y = this.originY
        }
        if (this.originY < -this.size) {
          this.originY = canvas.height + this.size
          this.y = this.originY
        }
        
        // Occasionally change direction
        if (Math.random() < 0.002) {
          this.velocityX += (Math.random() - 0.5) * 0.1
          this.velocityY += (Math.random() - 0.5) * 0.1
          
          // Limit velocity
          const speed = Math.sqrt(this.velocityX * this.velocityX + this.velocityY * this.velocityY)
          if (speed > this.maxSpeed) {
            this.velocityX = (this.velocityX / speed) * this.maxSpeed
            this.velocityY = (this.velocityY / speed) * this.maxSpeed
          }
        }
      }
      
      draw() {
        switch (this.patternType) {
          case 0:
            drawCircularPattern(ctx, this.x, this.y, this.size, this.opacity, this.rotation)
            break
          case 1:
            drawMandalaPattern(ctx, this.x, this.y, this.size, this.opacity, this.rotation)
            break
          case 2:
            drawFloralPattern(ctx, this.x, this.y, this.size, this.opacity, this.rotation)
            break
          case 3:
            drawGeometricPattern(ctx, this.x, this.y, this.size, this.opacity, this.rotation)
            break
          case 4:
            drawSimpleDot(ctx, this.x, this.y, this.size, this.opacity)
            break
        }
      }
    }
    
    // Create many more patterns for dense scatter distribution
    const patterns = []
    const patternCount = Math.floor((canvas.width * canvas.height) / 4000) // Denser distribution
    for (let i = 0; i < Math.max(50, Math.min(patternCount, 120)); i++) { // 50-120 particles
      patterns.push(new AlponaPattern())
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      patterns.forEach(pattern => {
        pattern.update()
        pattern.draw()
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ background: 'transparent' }}
    />
  )
}

export default SpiritualParticles