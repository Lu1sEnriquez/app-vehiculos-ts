"use client";
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { reportesGeneralGet } from "@/services/reportes.services";
import LabelFormulario from "../Formularios/LabelFormulario";

interface ReporteGeneralType {
  idSolicitud: number;
  nombreSolicitante: string;
  chofer: string;
  destino: string;
  vehiculo: string;
  placa: string;
  fechaRegistro: string;
  fechaSalida: string;
  fechaLlegada: string;
  estadoSolicitud: string;
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
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    // Reemplaza 'reportesGeneralGet' con la función real para obtener los datos
    reportesGeneralGet().then((response) => {
      console.log(response);
      if (response) {
        setReportes(response);
      }
    });
  }, []);

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

  const handleFilterByDate = () => {
    // Filtrar la tabla por rango de fechas
    const filteredByDate = reportes.filter((reporte) => {
      if (startDate && endDate) {
        const reporteDate = new Date(reporte.fechaRegistro);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        return reporteDate >= startDateObj && reporteDate <= endDateObj;
      }
      return true;
    });
    return filteredByDate;
  };

  const filteredReportes = handleFilterByDate().filter((reporte) =>
    Object.values(reporte).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="w-full h-screen overflow-x-auto  flex flex-col items-center">
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
          onChange={(e) => setStartDate(e.target.value)}
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
          rows={filteredReportes}
          columns={columns}
          getRowId={(row) => row.idSolicitud}
          pageSize={rowsPerPage}
          rowCount={filteredReportes.length}
          onPageChange={handleChangePage}
          onPageSizeChange={(newPageSize) => {
            setRowsPerPage(newPageSize.pageSize);
            setPage(0);
          }}
        />
      </div>
    </div>
  );
}