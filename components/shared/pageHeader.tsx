'use client'

import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Link from 'next/link';

interface PageHeaderProps {
    onNuevoTaller: () => void;
}
export default function PageHeader({ onNuevoTaller }: PageHeaderProps) {
    return (
      <div className="text-white">
          <div className="bg-lumara-primary dark:bg-lumara-dark-800">
              <div className="flex flex-col p-10">
                  <div className="float-left text-center mx-55 mb-5">
                      <div className="float-left">
                          <h1 className="text-2xl font-bold text-white">
                              Gestion talleres escolares
                          </h1>
                          <p className="float-left">
                              Sistema de coordinacion y seguimiento
                          </p>
                      </div>
                      <button onClick={onNuevoTaller} className="flex flex-row justify-end float-right space-x-4 bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors">< AddIcon className="mr-2 "/>
                      Nuevo taller
                    </button>
                  </div>
                  <div className="float-left text-center mx-55 flex flex-row justify-start space-x-4">
                      <Link href="/acceso" className="bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors">< DashboardIcon   className="mr-2 " />
                          dashboard
                      </Link>
                      <br/>
                      <Link href="/confirmaciones" className="bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors"><CalendarTodayIcon className="mr-2" />
                          confirmacion semanal
                      </Link>
                  </div>
              </div>
              </div>

      </div>
  )
}