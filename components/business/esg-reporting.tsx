'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Eye, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ESGReporting() {
  const [selectedReport, setSelectedReport] = useState<number | null>(null)

  const reports = [
    {
      id: 1,
      title: 'Annual Sustainability Report 2024',
      date: 'Jan 2024',
      status: 'completed',
      pages: 45,
      icon: '📄'
    },
    {
      id: 2,
      title: 'Carbon Balance Sheet',
      date: 'Mar 2024',
      status: 'completed',
      pages: 32,
      icon: '📊'
    },
    {
      id: 3,
      title: 'CSR Compliance (India)',
      date: 'Apr 2024',
      status: 'in-progress',
      pages: 28,
      icon: '✅'
    },
    {
      id: 4,
      title: 'Net-Zero Progress Report',
      date: 'Jun 2024',
      status: 'in-progress',
      pages: 38,
      icon: '🎯'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white mb-2">ESG & CSR Reporting</h1>
        <p className="text-slate-300">Generate and manage your sustainability reports</p>
      </motion.div>

      {/* Reports Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <motion.div
            key={report.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedReport(report.id)}
            className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 cursor-pointer hover:border-emerald-500/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{report.icon}</div>
              {report.status === 'completed' && (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </motion.div>
              )}
            </div>

            <h3 className="font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{report.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{report.date} • {report.pages} pages</p>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors"
              >
                <Eye className="w-4 h-4" />
                View
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Report Preview Modal */}
      {selectedReport && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedReport(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full border border-emerald-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {reports.find(r => r.id === selectedReport)?.title}
            </h2>
            <div className="bg-slate-700 rounded-lg h-96 mb-4 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-300">Report Preview</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setSelectedReport(null)}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Generate New Report */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-4">Generate New Report</h3>
        <p className="text-slate-300 mb-6">Create a custom ESG or sustainability report for your stakeholders</p>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <FileText className="w-4 h-4 mr-2" />
          Create Report
        </Button>
      </motion.div>
    </motion.div>
  )
}
