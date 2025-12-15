"use client";

import { initialData } from "@/lib/db-data"
import { useState } from "react"
import {  } from "./ScrollAnimationWrapper"

export default function Portfolio()  {
    
  const {projects } = initialData
    const [activeTab, setActiveTab] = useState("all")

   const categories = ["all", "Commercial", "Residential", "Post-Construction", "Fumigation", "Upholstery"]
  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab)

      


    return (
        <>
          {/* PORTFOLIO WITH FILTERABLE GALLERY */}
        <section className="py-20 md:py-32 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12 py-4">
            <div className="text-center ">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Our Portfolio</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
                Browse our latest completed projects across all service categories
              </p>
            </div>

          
        {/* Filter Tabs */}
        <section className="py-8 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all transform ${
                    activeTab === category
                      ? "bg-primary text-slate-900 shadow-lg scale-105"
                      : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-92 overflow-hidden bg-slate-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                      <div>
                        <h3 className="font-black text-xl text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="flex justify-between items-center">
                      <span className="inline-block px-2 py-2 rounded-lg text-sm font-bold text-gray-500 ">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm dark:text-gray-400 font-medium">{project.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
                  No projects found in this category yet.
                </p>
              </div>
            )}
          </div>
        </>
   
          </div>
        </section>
        
        </>
    )
}
