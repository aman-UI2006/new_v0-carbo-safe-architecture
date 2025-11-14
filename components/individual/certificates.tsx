'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Share2, Linkedin, Instagram, CheckCircle, ArrowLeft, Copy, Check } from 'lucide-react'

const certificates = [
  {
    id: 1,
    userName: 'You',
    project: 'Amazon Rainforest Protection',
    amount: '5.0',
    date: '2024-06-15',
    certificateId: 'CSF-2024-001549',
    issuer: 'CarboSafe Platform',
    blockchainHash: '0x8f4c2a9b7e1d5c3f6a2b8d9e1c4f7a2b',
  },
  {
    id: 2,
    userName: 'You',
    project: 'Solar Farm Project - India',
    amount: '3.5',
    date: '2024-05-20',
    certificateId: 'CSF-2024-001523',
    issuer: 'CarboSafe Platform',
    blockchainHash: '0x3e7f9c2d1a5b8e4f6c9a2d5e8b1f4a7c',
  },
  {
    id: 3,
    userName: 'You',
    project: 'Wind Energy Expansion',
    amount: '2.8',
    date: '2024-04-10',
    certificateId: 'CSF-2024-001487',
    issuer: 'CarboSafe Platform',
    blockchainHash: '0x5a2e1f9c7d3b6a8e4f1c9d2a5b7e3c8f',
  },
]

const QRCode = ({ value }: { value: string }) => (
  <div className="w-24 h-24 bg-white p-2 rounded border-2 border-emerald-600 flex items-center justify-center">
    <div className="grid grid-cols-6 gap-px text-xs font-bold text-emerald-600">
      {value.split('').map((char, i) => (
        <div key={i} className="w-3 h-3 bg-emerald-600 rounded-sm" />
      ))}
    </div>
  </div>
)

function ShareModal({ cert, onClose }: { cert: any; onClose: () => void }) {
  const shareText = `I just offset ${cert.amount} tons of CO₂ through the "${cert.project}" project on CarboSafe! Join me in fighting climate change. #CarbonNeutral #ClimateAction`
  const linkedinUrl = `https://www.linkedin.com/feed/?feedType=UGC&ugcPost=${cert.certificateId}`
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-emerald-100"
      >
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">Share Your Impact</h3>
        
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const url = `https://www.linkedin.com/sharing/share-offsite/?url=carbosafe.com/cert/${cert.certificateId}`
              window.open(url, '_blank', 'width=500,height=500')
            }}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-all group border border-[#0A66C2]/20 hover:border-[#0A66C2]/50"
          >
            <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-125 transition-transform" />
            <div className="text-left">
              <span className="font-bold text-foreground text-sm">LinkedIn</span>
              <p className="text-xs text-foreground/60">Share your certificate</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const text = encodeURIComponent(`Check out my carbon offset achievement! I offset ${cert.amount} tons of CO₂ 🌱 #ClimateAction`)
              window.open(`https://www.instagram.com/`, '_blank')
              setTimeout(() => alert('Open Instagram and paste your story!'), 500)
            }}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all group border border-purple-500/20 hover:border-purple-500/50"
          >
            <Instagram className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-125 transition-transform" />
            <div className="text-left">
              <span className="font-bold text-foreground text-sm">Instagram</span>
              <p className="text-xs text-foreground/60">Share as story</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 transition-all group border border-emerald-600/20 hover:border-emerald-600/50"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-600 group-hover:scale-125 transition-transform" />
                <div className="text-left">
                  <span className="font-bold text-foreground text-sm">Copied!</span>
                  <p className="text-xs text-foreground/60">Ready to share</p>
                </div>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-emerald-600 group-hover:scale-125 transition-transform" />
                <div className="text-left">
                  <span className="font-bold text-foreground text-sm">Copy Text</span>
                  <p className="text-xs text-foreground/60">Use anywhere</p>
                </div>
              </>
            )}
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="w-full mt-6 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all font-semibold text-foreground"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)
  const [showShareModal, setShowShareModal] = useState(false)

  const handleDownloadPDF = (cert: any) => {
    const canvas = document.createElement('canvas')
    canvas.width = 1200
    canvas.height = 800
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      ctx.fillStyle = '#f0fdf4'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#059669'
      ctx.font = 'bold 48px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Certificate of Impact', canvas.width / 2, 100)
      
      ctx.font = '32px Arial'
      ctx.fillStyle = '#000'
      ctx.fillText(`${cert.userName}`, canvas.width / 2, 200)
      
      ctx.font = 'bold 64px Arial'
      ctx.fillStyle = '#059669'
      ctx.fillText(`${cert.amount}`, canvas.width / 2, 350)
      
      ctx.font = '24px Arial'
      ctx.fillStyle = '#666'
      ctx.fillText('tons CO₂ Offset', canvas.width / 2, 410)
      
      ctx.font = '18px Arial'
      ctx.fillStyle = '#000'
      ctx.fillText(`Project: ${cert.project}`, canvas.width / 2, 520)
      ctx.fillText(`Date: ${cert.date}`, canvas.width / 2, 570)
      ctx.fillText(`ID: ${cert.certificateId}`, canvas.width / 2, 620)
      
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = `certificate-${cert.certificateId}.png`
      link.click()
    }
  }

  if (selectedCert) {
    const cert = certificates.find(c => c.id === selectedCert)!
    
    return (
      <div className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            variant="outline" 
            onClick={() => setSelectedCert(null)} 
            className="gap-2 hover:shadow-md hover:bg-emerald-50 border-emerald-300 hover:border-emerald-500"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Certificates
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="backdrop-blur-2xl bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/80 border-2 border-emerald-200/60 shadow-2xl overflow-hidden hover:shadow-3xl transition-all">
            <div className="relative p-12 md:p-16">
              <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-8 right-8 text-9xl text-emerald-200/40"
              >
                ✓
              </motion.div>

              <motion.div
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 left-12 text-8xl text-blue-200/30"
              >
                🌱
              </motion.div>
              
              {/* Header with badge */}
              <div className="text-center mb-12 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <CheckCircle className="w-12 h-12 text-white animate-bounce" />
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3"
                >
                  Certificate of Impact
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-emerald-600 font-bold flex items-center justify-center gap-2 text-lg"
                >
                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-emerald-600 rounded-full"></motion.span>
                  Blockchain Verified
                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-3 h-3 bg-emerald-600 rounded-full"></motion.span>
                </motion.p>
              </div>

              {/* Certificate details */}
              <div className="space-y-10 py-12 border-t-2 border-b-2 border-emerald-200/40 relative z-10">
                {/* User name and CO2 amount highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center space-y-6"
                >
                  <div>
                    <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-widest font-bold">Certificate Holder</p>
                    <p className="text-3xl md:text-4xl font-bold text-foreground mt-3">{cert.userName}</p>
                  </div>
                  
                  <motion.div animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="mx-auto w-40 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></motion.div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-widest font-bold">CO₂ Offset Amount</p>
                    <motion.p
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent"
                    >
                      {cert.amount}
                    </motion.p>
                    <p className="text-lg md:text-xl text-emerald-600 font-bold">tons CO₂ Equivalent</p>
                  </div>
                </motion.div>

                {/* Project and details grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Project Name', value: cert.project, icon: '🌍' },
                    { label: 'Certification Date', value: cert.date, icon: '📅' },
                    { label: 'Certificate ID', value: cert.certificateId, icon: '🔐', mono: true },
                    { label: 'Issued By', value: cert.issuer, icon: '✓' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(5, 150, 105, 0.15)' }}
                      className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border-2 border-white/50 hover:border-emerald-300/70 transition-all"
                    >
                      <p className="text-xs text-foreground/60 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">{item.icon} {item.label}</p>
                      <p className={`font-bold text-foreground text-base break-words ${item.mono ? 'font-mono text-sm' : ''}`}>
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* QR Code and blockchain verification */}
              <div className="flex flex-col md:flex-row items-end justify-between mt-10 pt-8 border-t border-emerald-200/40 gap-6 relative z-10">
                <motion.div
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="origin-center"
                >
                  <div className="w-28 h-28 bg-white p-3 rounded-lg border-4 border-emerald-600 flex items-center justify-center shadow-lg">
                    <div className="grid grid-cols-6 gap-1">
                      {cert.certificateId.substring(0, 36).split('').map((char, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.05 }}
                          className="w-3 h-3 bg-emerald-600 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center md:text-right space-y-3"
                >
                  <div className="flex items-center justify-center md:justify-end gap-2">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-emerald-500 rounded-full"></motion.div>
                    <p className="text-sm font-bold text-emerald-600">Blockchain Verified</p>
                  </div>
                  <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-200/50">
                    <p className="text-xs text-foreground/60 font-mono">Hash: {cert.blockchainHash}</p>
                  </div>
                  <p className="text-xs font-bold text-emerald-600">CarboSafe™ Platform</p>
                </motion.div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => handleDownloadPDF(cert)}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl gap-2 text-white font-bold text-base py-6 rounded-xl"
              >
                <Download className="w-5 h-5" />
                Download Certificate
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setShowShareModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl gap-2 text-white font-bold text-base py-6 rounded-xl"
              >
                <Share2 className="w-5 h-5" />
                Share Certificate
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText(`https://carbosafe.com/cert/${cert.certificateId}`)
                  alert('Certificate link copied to clipboard!')
                }}
                variant="outline" 
                className="w-full border-2 border-emerald-400 hover:bg-emerald-50 shadow-md hover:shadow-lg gap-2 font-bold text-base py-6 rounded-xl"
              >
                <Copy className="w-5 h-5" />
                Copy Link
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {showShareModal && (
          <ShareModal cert={cert} onClose={() => setShowShareModal(false)} />
        )}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Your Carbon Certificates</h2>
        <p className="text-foreground/60 text-lg">You've earned {certificates.length} certificates for offsetting carbon emissions</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12 }}
            whileHover={{ x: 8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCert(cert.id)}
            className="cursor-pointer group"
          >
            <Card className="p-8 backdrop-blur-xl bg-gradient-to-r from-white/90 via-emerald-50/50 to-blue-50/50 border-2 border-emerald-200/40 hover:border-emerald-400/60 shadow-lg hover:shadow-2xl transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-transparent to-blue-500/0 group-hover:from-emerald-500/5 group-hover:to-blue-500/5 transition-all" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      🏆
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg group-hover:text-emerald-600 transition-colors">{cert.project}</h3>
                      <p className="text-sm text-foreground/60">Earned on {cert.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-black bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
                  >
                    {cert.amount}
                  </motion.p>
                  <p className="text-sm text-foreground/60 font-mono">ID: {cert.certificateId}</p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileHover={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-emerald-50/50 border-2 border-emerald-200/60 rounded-xl text-center"
      >
        <p className="text-foreground/70 font-medium">Keep offsetting carbon to earn more certificates and unlock higher eco levels! 🌱</p>
      </motion.div>
    </div>
  )
}
