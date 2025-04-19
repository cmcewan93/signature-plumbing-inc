import React from 'react';
import Image from 'next/image';

export const DrainIcon = () => (
  <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image
      src="/drain_services_icon.svg"
      alt="Drain Services Icon"
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const ConstructionIcon = () => (
  <Image
    src="/new_construction_icon.svg"
    alt="New Construction Icon"
    width={100}
    height={100}
  />
);

export const EmergencyIcon = () => (
  <Image
    src="/emergency_repair_icon.svg"
    alt="Emergency Repairs Icon"
    width={100}
    height={100}
  />
);

export const InstallationIcon = () => (
  <Image
    src="/installation_icon.svg"
    alt="Installation Icon"
    width={100}
    height={100}
  />
);

export const MaintenanceIcon = () => (
  <Image
    src="/maintenance_icon.svg"
    alt="Maintenance"
    width={100}
    height={100}
  />
);

export const WaterHeaterIcon = () => (
  <Image
    src="/water_heater_icon.svg"
    alt="Water Heater Icon"
    width={100}
    height={100}
  />
);

export const WaterFiltrationIcon = () => (
  <Image
    src="/filtration_icon.svg"
    alt="Water Filtration Icon"
    width={100}
    height={100}
  />
);

export const BackWaterValveIcon = () => (
  <Image
    src="/Backwater_Valve_Installation.svg"
    alt="Backwater Valve Installation Icon"
    width={100}
    height={100}
  />
); 