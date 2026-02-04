export const generatePDF = async () => {
  // Only run in browser
  if (typeof window === 'undefined') {
    console.error('PDF generation only works in browser');
    return;
  }

  try {
    // Import QR code library
    const QRCode = await import('qrcode');
    
    // Import html2pdf
    const html2pdf = (await import('html2pdf.js')).default;

    console.log('Generating QR code...');
    
    // Generate QR code as data URL
    let qrDataUrl = '';
    try {
      qrDataUrl = await (QRCode as any).toDataURL('https://co-alfarabi.netlify.app/', {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        width: 200,
        margin: 1,
        color: {
          dark: '#0ea5e9',
          light: '#ffffff'
        }
      });
      console.log('QR code generated successfully');
    } catch (qrError) {
      console.warn('QR code generation failed, continuing without QR:', qrError);
      // Continue without QR code
    }

    console.log('Creating PDF content...');

    // Create PDF content
    const element = document.createElement('div');
    element.innerHTML = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: 100%; height: 100%; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.5; 
              color: #333; 
              background: white;
            }
            
            .container { 
              width: 100%;
              background: white;
            }
            
            /* Header */
            .header { 
              display: flex; 
              justify-content: space-between; 
              align-items: flex-start; 
              border-bottom: 3px solid #0ea5e9; 
              padding: 25px; 
              background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            }
            
            .header-left { flex: 1; }
            .logo-box { 
              display: flex; 
              align-items: center; 
              margin-bottom: 10px; 
            }
            .logo-icon { 
              font-size: 36px; 
              margin-right: 10px; 
            }
            .company-name { 
              font-size: 26px; 
              font-weight: bold; 
              color: #0ea5e9; 
            }
            .company-tagline { 
              font-size: 12px; 
              color: #0284c7; 
              margin-top: 3px; 
            }
            
            .header-right { 
              text-align: center; 
            }
            .qr-code-label { 
              font-size: 10px; 
              font-weight: bold; 
              color: #0284c7; 
              margin-bottom: 5px; 
            }
            .qr-code-img { 
              width: 90px; 
              height: 90px; 
              border: 2px solid #0ea5e9;
              background: white;
            }
            
            /* Sections */
            section { 
              padding: 20px 25px; 
              border-bottom: 1px solid #e5e7eb;
              page-break-inside: avoid;
            }
            
            h2 { 
              color: #0ea5e9; 
              font-size: 18px; 
              margin-bottom: 12px; 
              border-left: 4px solid #0ea5e9; 
              padding-left: 10px; 
            }
            
            .content { 
              padding: 10px; 
              background: #f9fafb; 
              border-radius: 4px; 
              margin-bottom: 10px; 
              border-left: 4px solid #0ea5e9; 
            }
            .content p { 
              margin-bottom: 6px; 
              font-size: 12px; 
              line-height: 1.5; 
            }
            
            .grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 10px; 
              margin-bottom: 10px;
            }
            
            .card { 
              background: white; 
              border: 2px solid #dbeafe; 
              border-radius: 4px; 
              padding: 10px; 
            }
            
            .card h3 { 
              color: #0ea5e9; 
              margin-bottom: 6px; 
              font-size: 12px; 
              font-weight: bold; 
            }
            
            .card p { 
              font-size: 11px; 
              color: #666; 
              margin-bottom: 4px;
            }
            
            .stat { 
              display: flex; 
              align-items: center; 
              margin-bottom: 6px; 
            }
            
            .stat-number { 
              font-size: 20px; 
              font-weight: bold; 
              color: #0ea5e9; 
              margin-right: 10px; 
              min-width: 35px; 
            }
            
            .stat-label { 
              font-size: 11px; 
              color: #666; 
            }
            
            ul { 
              margin-left: 16px; 
              margin-top: 6px; 
            }
            
            li { 
              margin-bottom: 5px; 
              font-size: 11px; 
              line-height: 1.4;
            }
            
            li strong { 
              color: #0ea5e9; 
            }
            
            .badge { 
              display: inline-block; 
              background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); 
              color: white; 
              padding: 3px 6px; 
              border-radius: 2px; 
              font-size: 9px; 
              font-weight: bold; 
              margin-right: 3px; 
              margin-bottom: 4px; 
            }
            
            .footer { 
              text-align: center; 
              padding: 12px 25px; 
              background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); 
              border-top: 3px solid #0ea5e9; 
              font-size: 10px;
            }
            
            .footer p { 
              color: #0284c7; 
              margin-bottom: 2px; 
            }
            
            @media print {
              body { margin: 0; padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <div class="header-left">
                <div class="logo-box">
                  <div class="logo-icon">🏢</div>
                  <div>
                    <div class="company-name">ALFarabi</div>
                    <div class="company-tagline">Professional Workforce Solutions</div>
                  </div>
                </div>
              </div>
              <div class="header-right">
                <div class="qr-code-label">SCAN TO VISIT</div>
                ${qrDataUrl ? `<img src="${qrDataUrl}" alt="QR Code" class="qr-code-img" />` : '<div class="qr-code-img" style="display:flex;align-items:center;justify-content:center;font-size:10px;color:#999;">QR Code</div>'}
              </div>
            </div>

            <!-- Overview -->
            <section>
              <h2>Company Overview</h2>
              <div class="content">
                <p>ALFarabi International Group is Egypt's leading workforce supply provider. With 15+ years of proven excellence, we deliver certified professional crews for construction, infrastructure, energy, and industrial projects.</p>
                <p style="margin-top: 6px;"><strong>Our Strength:</strong> Quality, Safety & Professional Excellence</p>
              </div>
            </section>

            <!-- Capabilities -->
            <section>
              <h2>Our Workforce</h2>
              <div class="grid">
                <div class="card">
                  <h3>👥 Total Team</h3>
                  <div class="stat">
                    <div class="stat-number">88</div>
                    <div class="stat-label">Professionals</div>
                  </div>
                </div>
                <div class="card">
                  <h3>⚙️ Management</h3>
                  <div class="stat">
                    <div class="stat-number">8</div>
                    <div class="stat-label">Managers</div>
                  </div>
                </div>
                <div class="card">
                  <h3>🔧 Technicians</h3>
                  <div class="stat">
                    <div class="stat-number">50</div>
                    <div class="stat-label">Specialists</div>
                  </div>
                </div>
                <div class="card">
                  <h3>👷 Support</h3>
                  <div class="stat">
                    <div class="stat-number">30</div>
                    <div class="stat-label">Personnel</div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Why Choose -->
            <section>
              <h2>Why Choose Us</h2>
              <ul>
                <li><strong>Certified Teams:</strong> Rigorously tested and internationally certified</li>
                <li><strong>Safety First:</strong> 100% NEBOSH compliance with comprehensive protocols</li>
                <li><strong>Custom Solutions:</strong> Flexible crew composition for your needs</li>
                <li><strong>Complete Support:</strong> Accommodation, transport, meals & supervision</li>
                <li><strong>Track Record:</strong> 92% completion rate, 5-star client satisfaction</li>
              </ul>
            </section>

            <!-- Services -->
            <section>
              <h2>Our Services</h2>
              <div class="grid">
                <div class="card">
                  <span class="badge">CONSTRUCTION</span>
                  <h3>Workforce Supply</h3>
                  <p>Skilled crews for all construction types with full supervision</p>
                </div>
                <div class="card">
                  <span class="badge">INFRASTRUCTURE</span>
                  <h3>Major Projects</h3>
                  <p>Roads, bridges, utilities, and large development work</p>
                </div>
                <div class="card">
                  <span class="badge">INDUSTRIAL</span>
                  <h3>Operations</h3>
                  <p>Manufacturing, energy, and facility management</p>
                </div>
                <div class="card">
                  <span class="badge">HOSPITALITY</span>
                  <h3>Tourism</h3>
                  <p>Resort and hospitality facility development</p>
                </div>
              </div>
            </section>

            <!-- Contact -->
            <section>
              <h2>Get in Touch</h2>
              <div class="grid">
                <div class="card">
                  <h3>📧 Email</h3>
                  <p style="color: #0ea5e9; font-weight: bold; margin: 0;">info@alfarabi.com</p>
                </div>
                <div class="card">
                  <h3>📞 Phone</h3>
                  <p style="color: #0ea5e9; font-weight: bold; margin: 0;">+20 2 1234 5678</p>
                </div>
                <div class="card">
                  <h3>🌐 Website</h3>
                  <p style="color: #0ea5e9; font-weight: bold; margin: 0;">co-alfarabi.netlify.app</p>
                </div>
                <div class="card">
                  <h3>📍 Location</h3>
                  <p style="color: #0ea5e9; font-weight: bold; margin: 0;">Cairo & El Dabaa</p>
                </div>
              </div>
            </section>

            <!-- Footer -->
            <div class="footer">
              <p><strong>ALFarabi International Group</strong></p>
              <p>Professional Workforce Supply Solutions</p>
              <p style="margin-top: 6px; font-size: 9px;">© 2024 ALFarabi Group | Brochure ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const opt = {
      margin: 3,
      filename: 'ALFarabi_Professional_Brochure.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, logging: false, useCORS: true, allowTaint: true },
      jsPDF: { orientation: 'portrait' as const, unit: 'mm' as const, format: 'a4' }
    };

    console.log('Starting PDF generation...');
    // Generate PDF
    await (html2pdf() as any).set(opt).from(element.innerHTML).save();
    console.log('✓ PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert(`Error generating PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
