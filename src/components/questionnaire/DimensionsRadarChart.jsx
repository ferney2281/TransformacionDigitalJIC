import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';

export const DimensionsRadarChart = ({ dimensionResults = [] }) => {
  // Transformación limpia de datos para Recharts
  const radarChartData = dimensionResults.map((dim) => ({
    dimensionCode: `D${dim.id}`,
    dimensionName: dim.name,
    Puntaje: Number((dim.score || 0).toFixed(2)),
    MetaReferencia: Number((dim.targetRef || 0).toFixed(2))
  }));

  return (
    <div 
      style={{ 
        marginTop: '1.5rem', 
        backgroundColor: '#ffffff', 
        padding: '1.5rem 2rem', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem', textAlign: 'center' }}>
        Perfil Comparativo de Madurez (9 Dimensiones)
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem', textAlign: 'center' }}>
        Visualización poligonal del desempeño actual frente a la meta de referencia
      </p>

      <div style={{ width: '100%', height: 420 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarChartData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="dimensionCode" 
              tick={{ fill: '#0f172a', fontSize: 13, fontWeight: 'bold' }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 4]} stroke="#94a3b8" />
            
            <Tooltip 
              formatter={(value, name) => [
                `${value} pts`, 
                name === 'Puntaje' ? 'Obtenido' : 'Meta Ref.'
              ]}
              labelFormatter={(label) => {
                const item = radarChartData.find(d => d.dimensionCode === label);
                return item ? `${item.dimensionCode}: ${item.dimensionName}` : label;
              }}
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1' }}
            />

            <Legend wrapperStyle={{ paddingTop: '10px' }} />

            <Radar 
              name="Meta Referencia" 
              dataKey="MetaReferencia" 
              stroke="#94a3b8" 
              fill="#cbd5e1" 
              fillOpacity={0.3} 
            />
            
            <Radar 
              name="Puntaje Obtenido" 
              dataKey="Puntaje" 
              stroke="#0284c7" 
              fill="#0369a1" 
              fillOpacity={0.45} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};