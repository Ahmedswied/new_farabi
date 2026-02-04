export const generatePDF = async () => {
  // Only run in browser
  if (typeof window === 'undefined') {
    console.error('PDF generation only works in browser');
    return;
  }

  // Import QR code library directly
  const QRCode = await import('qrcode');

  // Dynamically import html2pdf only in browser
  const html2pdf = (await import('html2pdf.js')).default;

  try {
    // Generate QR code as data URL
    const qrDataUrl = await QRCode.toDataURL('https://co-alfarabi.netlify.app/', {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 300,
      margin: 1,
      color: {
        dark: '#0ea5e9',
        light: '#ffffff'
      }
    } as any);

    // Create a temporary HTML element with the content to generate
    const element = document.createElement('div');
    element.innerHTML = `
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: white; }
            .container { max-width: 900px; margin: 0 auto; background: white; }
            
            /* Header with Logo and QR Code */
            .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0ea5e9; padding: 30px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }
            .header-left { flex: 1; }
            .logo-box { display: flex; align-items: center; margin-bottom: 15px; }
            .logo-icon { font-size: 48px; margin-right: 15px; }
            .company-name { font-size: 28px; font-weight: bold; color: #0ea5e9; }
            .company-tagline { font-size: 13px; color: #0284c7; margin-top: 5px; }
            
            .header-right { text-align: center; }
            .qr-code-label { font-size: 12px; font-weight: bold; color: #0284c7; margin-bottom: 8px; }
            .qr-code-img { width: 120px; height: 120px; border: 2px solid #0ea5e9; border-radius: 8px; }
            
            /* Main Content */
            section { margin: 0; padding: 30px; border-bottom: 1px solid #e5e7eb; }
            section:last-child { border-bottom: none; }
            
            h2 { color: #0ea5e9; font-size: 22px; margin-bottom: 15px; border-left: 4px solid #0ea5e9; padding-left: 15px; }
            
            .content { padding: 15px; background: #f9fafb; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #0ea5e9; }
            .content p { margin-bottom: 10px; font-size: 14px; line-height: 1.7; }
            
            /* Grid Layout */
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
            .card { background: white; border: 2px solid #dbeafe; border-radius: 8px; padding: 15px; }
            .card h3 { color: #0ea5e9; margin-bottom: 10px; font-size: 15px; font-weight: bold; }
            .card p { font-size: 13px; color: #666; }
            
            /* Stats */
            .stat { display: flex; align-items: center; margin-bottom: 10px; }
            .stat-number { font-size: 26px; font-weight: bold; color: #0ea5e9; margin-right: 15px; width: 45px; }
            .stat-label { font-size: 13px; color: #666; }
            
            /* Lists */
            ul { margin-left: 20px; margin-top: 10px; }
            li { margin-bottom: 8px; font-size: 14px; }
            li strong { color: #0ea5e9; }
            
            /* Badges */
            .badge { display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 5px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; margin-right: 5px; margin-bottom: 8px; }
            
            /* Footer */
            .footer { text-align: center; padding: 20px 30px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-top: 3px solid #0ea5e9; }
            .footer p { font-size: 12px; color: #0284c7; margin-bottom: 5px; }
            .footer-website { font-weight: bold; color: #0ea5e9; }
            
            /* Page Break Support */
            .page-section { page-break-inside: avoid; }
            
            /* Print Styles */
            @media print {
              body { background: white; }
              .container { max-width: 100%; }
              section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header with Logo and QR Code -->
            <div class="header">
              <div class="header-left">
                <div class="logo-box">
                  <div class="logo-icon">🏢</div>
                  <div>
                    <div class="company-name">ALFarabi Group</div>
                    <div class="company-tagline">Professional Workforce Solutions</div>
                  </div>
                </div>
              </div>
              <div class="header-right">
                <div class="qr-code-label">VISIT US ONLINE</div>
                <img src="${qrDataUrl}" alt="QR Code" class="qr-code-img" />
                <div style="font-size: 11px; color: #0284c7; margin-top: 5px; font-weight: bold;">Scan to visit</div>
              </div>
            </div>

            <!-- Overview Section -->
            <section class="page-section">
              <h2>Company Overview</h2>
              <div class="content">
                <p>ALFarabi International Group is Egypt's leading provider of specialized workforce supply solutions. With 15+ years of proven excellence, we deliver certified professional crews for complex projects across construction, infrastructure, energy, and industrial sectors.</p>
                <p style="margin-top: 10px;"><strong>Our Promise:</strong> Quality, Safety, and Excellence in every project we undertake.</p>
              </div>
            </section>

            <!-- Capabilities Section -->
            <section class="page-section">
              <h2>Our Workforce Capabilities</h2>
              <div class="grid">
                <div class="card">
                  <h3>👥 Total Workforce</h3>
                  <div class="stat">
                    <div class="stat-number">88</div>
                    <div class="stat-label">Professional crew members</div>
                  </div>
                </div>
                <div class="card">
                  <h3>⚙️ Management</h3>
                  <div class="stat">
                    <div class="stat-number">8</div>
                    <div class="stat-label">Expert project managers</div>
                  </div>
                </div>
                <div class="card">
                  <h3>🔧 Skilled Technicians</h3>
                  <div class="stat">
                    <div class="stat-number">50</div>
                    <div class="stat-label">Specialized workers</div>
                  </div>
                </div>
                <div class="card">
                  <h3>👷 Support Staff</h3>
                  <div class="stat">
                    <div class="stat-number">30</div>
                    <div class="stat-label">Support personnel</div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Why Choose ALFarabi -->
            <section class="page-section">
              <h2>Why Choose ALFarabi?</h2>
              <ul>
                <li><strong>Rigorously Tested & Certified:</strong> All workers meet international standards and certifications</li>
                <li><strong>Safety Excellence:</strong> 100% NEBOSH compliance with comprehensive safety protocols</li>
                <li><strong>Custom Solutions:</strong> Flexible crew composition tailored to your project needs</li>
                <li><strong>Complete Support:</strong> Accommodation, transportation, meals, and on-site supervision included</li>
                <li><strong>Proven Track Record:</strong> 92% project completion rate with 5-star client satisfaction</li>
                <li><strong>24/7 Availability:</strong> Round-the-clock support and rapid response team</li>
              </ul>
            </section>

            <!-- Services Section -->
            <section class="page-section">
              <h2>Our Services & Expertise</h2>
              <div class="grid">
                <div class="card">
                  <span class="badge">CONSTRUCTION</span>
                  <h3>Workforce Supply</h3>
                  <p>Skilled crews for residential, commercial, and civil engineering projects with full supervision.</p>
                </div>
                <div class="card">
                  <span class="badge">INFRASTRUCTURE</span>
                  <h3>Infrastructure</h3>
                  <p>Specialized teams for roads, bridges, utilities, and large-scale development projects.</p>
                </div>
                <div class="card">
                  <span class="badge">INDUSTRIAL</span>
                  <h3>Industrial Operations</h3>
                  <p>Expert crews for manufacturing, energy, and industrial facility management.</p>
                </div>
                <div class="card">
                  <span class="badge">HOSPITALITY</span>
                  <h3>Hospitality & Tourism</h3>
                  <p>Professional teams for resort construction and hospitality facility development.</p>
                </div>
              </div>
            </section>

            <!-- Key Strengths -->
            <section class="page-section">
              <h2>Our Competitive Advantages</h2>
              <div class="grid">
                <div class="card">
                  <h3>🎖️ Quality Assured</h3>
                  <p>Strict quality standards at every project stage with continuous improvement</p>
                </div>
                <div class="card">
                  <h3>🛡️ Safety First</h3>
                  <p>NEBOSH certified officers with comprehensive protocols and zero-accident focus</p>
                </div>
                <div class="card">
                  <h3>📱 24/7 Support</h3>
                  <p>Dedicated account management with rapid response and continuous communication</p>
                </div>
                <div class="card">
                  <h3>⭐ Excellence</h3>
                  <p>15+ years delivering outstanding results across diverse industry sectors</p>
                </div>
              </div>
            </section>

            <!-- Contact Section -->
            <section class="page-section">
              <h2>Get in Touch</h2>
              <div class="grid">
                <div class="card">
                  <h3>📧 Email</h3>
                  <p style="font-weight: bold; color: #0ea5e9;">info@alfarabi.com</p>
                </div>
                <div class="card">
                  <h3>📞 Phone</h3>
                  <p style="font-weight: bold; color: #0ea5e9;">+20 2 1234 5678</p>
                </div>
                <div class="card">
                  <h3>🏢 Cairo Office</h3>
                  <p style="font-weight: bold; color: #0ea5e9;">Headquarters</p>
                </div>
                <div class="card">
                  <h3>🌐 Online</h3>
                  <p style="font-weight: bold; color: #0ea5e9;">co-alfarabi.netlify.app</p>
                </div>
              </div>
            </section>

            <!-- Footer -->
            <div class="footer">
              <p><strong class="footer-website">ALFarabi International Group</strong></p>
              <p>Professional Workforce Supply Solutions | Quality • Safety • Excellence</p>
              <p style="margin-top: 10px; font-size: 11px;">© 2024 ALFarabi Group. All rights reserved. | Document generated: ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // PDF options optimized for printing
    const opt = {
      margin: 8,
      filename: 'ALFarabi_Professional_Brochure.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, logging: false },
      jsPDF: { orientation: 'portrait' as const, unit: 'mm' as const, format: 'a4' }
    };

    // Generate and save PDF
    (html2pdf() as any).set(opt).from(element.innerHTML).save();
    
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
