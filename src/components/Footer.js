import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="bg-black small text-center text-white-50">
      <div className="container">
        &copy; 2019 - {config.companyName}
      </div>
    </footer>
  );
}
