"use client";
import React, { useState, useEffect, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { reportesGeneralGet, reportesGeneralGetByRangeDate } from "@/services/reportes.services";
import { resolve } from "path";
import ErrorPopup from "../modal/Popups/ErrorPopup";

interface ReporteGeneralType {
  idSolicitud: number |null;
  nombreSolicitante: string |null;
  chofer: string |null;
  destino: string |null;
  vehiculo: string |null;
  placa: string |null;
  fechaRegistro: string |null;
  fechaSalida: string |null;
  fechaLlegada: string |null;
  estadoSolicitud: string |null;
}

const columns: GridColDef[] = [
  { field: "idSolicitud", headerName: "idSolicitud", width: 130 },
  { field: "nombreSolicitante", headerName: "nombreSolicitante", width: 200 },
  { field: "chofer", headerName: "chofer", width: 150 },
  { field: "destino", headerName: "destino", width: 150 },
  { field: "vehiculo", headerName: "vehiculo", width: 150 },
  { field: "placa", headerName: "placa", width: 150 },
  { field: "fechaRegistro", headerName: "fechaRegistro", width: 150 },
  { field: "fechaSalida", headerName: "fechaSalida", width: 150 },
  { field: "fechaLlegada", headerName: "fechaLlegada", width: 150 },
  { field: "estadoSolicitud", headerName: "estadoSolicitud", width: 150 },
];

export default function ReportesTable() {
  const [reportes, setReportes] = useState<ReporteGeneralType[]>([]);
  const [reportesFiltered, setReportesFiltered] = useState<ReporteGeneralType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const fechaActual = new Date();

  const yyyy = fechaActual.getFullYear();
  const mm = String(fechaActual.getMonth() + 1).padStart(2, '0');
  const dd = String(fechaActual.getDate()).padStart(2, '0');
  
  const initialStartDate = `${yyyy}-${mm}-01`;
  const initialEndDate = `${yyyy}-${mm}-${dd}`;

  const [startDate, setStartDate] = useState<string>(initialStartDate);
  const [endDate, setEndDate] = useState<string>(initialEndDate);
 const [error, setError] = useState<string | null>(null);
 
async function getReportesByFilter(fechaInicio?:string, fechaFin?:string ,id?:number) {
  
  if(id){
    
  }else if(fechaInicio && fechaFin){
    reportesGeneralGetByRangeDate(fechaInicio, fechaFin).then((response) => {
      
      if (typeof response == typeof reportes ) {
        setReportes(response);
        resolve("busqueda Exitosa")

      }else{       
        setError(response)
      }
    }).catch(error =>{
      setError(error)
    })
  }else{
    reportesGeneralGet().then((response) => {
      if (response && typeof response == typeof [] ) {
        setReportes(response);
        resolve("busqueda Exitosa")

      }else if (typeof response == "string" ){
        setError(response)
        
      }
    }).catch(error =>{
      setError(error)     
    })
  }
}


  useEffect(() => {
    // Reemplaza 'reportesGeneralGet' con la función real para obtener los datos
    getReportesByFilter( startDate, endDate).then(result =>{

    })
  }, [startDate, endDate]);

useEffect(() => {
   setReportesFiltered(reportes.filter((reporte) =>
  Object.values(reporte).some((value) =>
    value.toString().toLowerCase().includes(search.toLowerCase())
  )))

  
}, [search,reportes])

  



  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

  return (
    <div className="w-full h-screen overflow-x-auto  flex flex-col items-center">
      {error && <ErrorPopup errorText={error}/>}
      <div className="flex flex-wrap gap-4 ">
        <Box display="flex" alignItems="center">
          <TextField
            label="Buscar"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
       <div className="flex flex-col">
        
       <div>
        <TextField
        
          type="date"
          variant="outlined"
          
          value={startDate}
          onChange={(e) =>{
            console.log(e.target.value);
            
            setStartDate(e.target.value)
          }}
        />
        <TextField

          type="date"
          variant="outlined"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        /></div>
      </div>

       </div>
      <div className="w-11/12  shadow-xl border-4 border-azulNormal rounded-md"
      style={{height:'75%'}}
      >
        <DataGrid
        
          page={page}
          rows={reportesFiltered}
          columns={columns}
          getRowId={(row) => row.idSolicitud}
          pageSize={rowsPerPage}
          rowCount={reportesFiltered.length}
          onPageChange={handleChangePage}
          checkboxSelection
          onPageSizeChange={(newPageSize) => {
            setRowsPerPage(newPageSize.pageSize);
            setPage(0);
          }}
        />
      </div>
    </div>
  );
}