"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { initialData } from "@/lib/db-data"
import { Eye, EyeOff, Download, Upload } from "lucide-react"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [data, setData] = useState(initialData)
  const [activeTab, setActiveTab] = useState("company")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)

  // Simple auth - in production, use proper backend auth
  const adminPassword = "admin123"

  useEffect(() => {
    // Load data from localStorage if available
    const saved = localStorage.getItem("kolispotless_data")
    if (saved) {
      try {
        setData(JSON.parse(saved))
      } catch (e) {
        console.error("Error loading data:", e)
      }
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === adminPassword) {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Invalid password")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const saveData = () => {
    localStorage.setItem("kolispotless_data", JSON.stringify(data))
    alert("Data saved successfully!")
  }

  const downloadData = () => {
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "koli-data.json"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string)
        setData(json)
        localStorage.setItem("kolispotless_data", JSON.stringify(json))
        alert("Data uploaded successfully!")
      } catch (e) {
        alert("Error uploading file")
      }
    }
    reader.readAsText(file)
  }

  const handleCompanyChange = (field: string, value: string) => {
    setData({
      ...data,
      company: { ...data.company, [field]: value },
    })
  }

  const handleHeroChange = (field: string, value: string) => {
    setData({
      ...data,
      home: {
        ...data.home,
        hero: { ...data.home.hero, [field]: value },
      },
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-primary-dark to-black text-white flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white text-primary-dark p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
          <div className="mb-6">
            <label className="block font-bold mb-2">Password</label>
            <div className="flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="flex-1 border rounded px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-dark font-bold py-2 rounded hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary-dark text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Legit  Cleaners Admin</h1>
        <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
          Logout
        </button>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {["company", "home", "about", "footer"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded font-bold whitespace-nowrap transition ${
                activeTab === tab ? "bg-primary text-primary-dark" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Save/Export Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={saveData}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Save Data
          </button>
          <button
            onClick={downloadData}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Download size={18} /> Export JSON
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition flex items-center gap-2"
          >
            <Upload size={18} /> Import JSON
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleUploadFile} className="hidden" />
        </div>

        {/* Company Settings */}
        {activeTab === "company" && (
          <div className="bg-white p-8 rounded shadow-md space-y-4">
            <h2 className="text-2xl font-bold mb-6">Company Settings</h2>

            <div>
              <label className="block font-bold mb-2">Company Name</label>
              <input
                type="text"
                value={data.company.name}
                onChange={(e) => handleCompanyChange("name", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Tagline</label>
              <input
                type="text"
                value={data.company.tagline}
                onChange={(e) => handleCompanyChange("tagline", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Phone</label>
              <input
                type="tel"
                value={data.company.phone}
                onChange={(e) => handleCompanyChange("phone", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Email</label>
              <input
                type="email"
                value={data.company.email}
                onChange={(e) => handleCompanyChange("email", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Logo URL</label>
              <input
                type="url"
                value={data.company.logo}
                onChange={(e) => handleCompanyChange("logo", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
              <img src={data.company.logo || "/placeholder.svg"} alt="Logo" className="h-16 mt-4" />
            </div>

            <div>
              <label className="block font-bold mb-2">Location</label>
              <input
                type="text"
                value={data.company.location}
                onChange={(e) => handleCompanyChange("location", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Description</label>
              <textarea
                value={data.company.description}
                onChange={(e) => handleCompanyChange("description", e.target.value)}
                className="w-full border rounded px-4 py-2 h-24"
              />
            </div>
          </div>
        )}

        {/* Home Hero Settings */}
        {activeTab === "home" && (
          <div className="bg-white p-8 rounded shadow-md space-y-4">
            <h2 className="text-2xl font-bold mb-6">Home Page Settings</h2>

            <div>
              <label className="block font-bold mb-2">Hero Title</label>
              <input
                type="text"
                value={data.home.hero.title}
                onChange={(e) => handleHeroChange("title", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Hero Subtitle</label>
              <input
                type="text"
                value={data.home.hero.subtitle}
                onChange={(e) => handleHeroChange("subtitle", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Hero CTA Text</label>
              <input
                type="text"
                value={data.home.hero.cta}
                onChange={(e) => handleHeroChange("cta", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">Background Image URL</label>
              <input
                type="url"
                value={data.home.hero.backgroundImage}
                onChange={(e) => handleHeroChange("backgroundImage", e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        )}

        {/* About Settings */}
        {activeTab === "about" && (
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">About Page Settings</h2>
            <p className="text-gray-600">Edit about sections and values in the data.json file for full control.</p>
          </div>
        )}

        {/* Footer Settings */}
        {activeTab === "footer" && (
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Footer Settings</h2>
            <p className="text-gray-600">Edit footer content and links in the data.json file for full control.</p>
          </div>
        )}
      </div>
    </div>
  )
}
