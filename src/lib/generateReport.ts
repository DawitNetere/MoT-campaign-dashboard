import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateQ1Report() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Ministry of Tourism — Q1 2026 Campaign Performance", 14, 18);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Ministry of Tourism — Federal Democratic Republic of Ethiopia", 14, 26);
  doc.text("Report generated: February 15, 2026  |  Period: Jan 1 – Mar 31, 2026", 14, 33);

  y = 50;

  // Executive Summary
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Executive Summary", 14, y);
  y += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const summary = `This report provides a comprehensive overview of AACCSA's digital marketing performance during Q1 2026. Overall engagement grew 23.4% compared to Q4 2025, driven primarily by the Ethiopian Coffee Week campaign and increased Telegram activity. Total reach across all platforms exceeded 1.2 million impressions, with a blended engagement rate of 4.7%. Budget utilization stands at 68% of the quarterly allocation, on track for full deployment by quarter-end.`;
  const lines = doc.splitTextToSize(summary, pageWidth - 28);
  doc.text(lines, 14, y);
  y += lines.length * 4.5 + 6;

  // KPI Overview
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Key Performance Indicators", 14, y);
  y += 4;

  autoTable(doc, {
    startY: y,
    head: [["Metric", "Q1 2026", "Q4 2025", "Change"]],
    body: [
      ["Total Reach", "1,247,300", "1,010,500", "+23.4%"],
      ["Engagement Rate", "4.7%", "3.8%", "+0.9pp"],
      ["New Followers", "18,420", "14,200", "+29.7%"],
      ["Content Published", "47 posts", "39 posts", "+20.5%"],
      ["Avg. Click-Through Rate", "2.3%", "1.9%", "+0.4pp"],
      ["Email Open Rate", "34.2%", "29.8%", "+4.4pp"],
      ["Video Views", "89,400", "62,100", "+44.0%"],
      ["Website Referrals", "12,640", "9,870", "+28.1%"],
    ],
    styles: { fontSize: 9, cellPadding: 3 },
    headStyles: { fillColor: [30, 41, 59], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    margin: { left: 14, right: 14 },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Platform Breakdown
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text("Platform Breakdown", 14, y);
  y += 4;

  autoTable(doc, {
    startY: y,
    head: [["Platform", "Posts", "Reach", "Engagement", "Followers Gained", "Top Content"]],
    body: [
      ["Facebook", "14", "387,200", "3.9%", "4,120", "Coffee Week Launch"],
      ["Telegram", "12", "298,500", "6.1%", "6,340", "Trade Fair Registration"],
      ["LinkedIn", "8", "156,800", "4.2%", "2,890", "Member Spotlight: Anbessa"],
      ["Instagram", "7", "245,100", "5.8%", "3,470", "Women in Business Recap"],
      ["YouTube", "3", "89,400", "3.1%", "780", "Export Policy Explainer"],
      ["Email", "3", "70,300", "34.2% open", "820", "February Newsletter"],
    ],
    styles: { fontSize: 8, cellPadding: 2.5 },
    headStyles: { fillColor: [30, 41, 59], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    margin: { left: 14, right: 14 },
    columnStyles: { 5: { cellWidth: 40 } },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Top Campaigns
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text("Top Performing Campaigns", 14, y);
  y += 4;

  autoTable(doc, {
    startY: y,
    head: [["Campaign", "Platform", "Reach", "Eng. Rate", "Conversions", "Cost (ETB)", "CPA (ETB)"]],
    body: [
      ["Ethiopian Coffee Week", "Multi", "312,400", "5.2%", "1,840", "45,000", "24.46"],
      ["Trade Fair 2026 Early Bird", "Telegram", "178,600", "7.8%", "2,340", "28,000", "11.97"],
      ["Women in Business Forum", "Instagram", "156,200", "5.8%", "890", "22,000", "24.72"],
      ["Member Spotlight Series", "LinkedIn", "98,700", "4.1%", "420", "12,000", "28.57"],
      ["New Export Policy Explainer", "YouTube", "89,400", "3.1%", "310", "35,000", "112.90"],
      ["Monthly Newsletter — Jan", "Email", "42,100", "34.2% open", "680", "5,000", "7.35"],
      ["Monthly Newsletter — Feb", "Email", "38,200", "31.8% open", "540", "5,000", "9.26"],
    ],
    styles: { fontSize: 8, cellPadding: 2.5 },
    headStyles: { fillColor: [30, 41, 59], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    margin: { left: 14, right: 14 },
  });

  // Page 2
  doc.addPage();
  y = 20;

  // Budget Summary
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text("Budget Utilization Summary", 14, y);
  y += 4;

  autoTable(doc, {
    startY: y,
    head: [["Category", "Allocated (ETB)", "Spent (ETB)", "Remaining (ETB)", "Utilization"]],
    body: [
      ["Paid Advertising", "120,000", "82,400", "37,600", "68.7%"],
      ["Content Production", "80,000", "54,200", "25,800", "67.8%"],
      ["Influencer Partnerships", "40,000", "28,000", "12,000", "70.0%"],
      ["Platform Subscriptions", "25,000", "22,500", "2,500", "90.0%"],
      ["Event Promotions", "35,000", "18,900", "16,100", "54.0%"],
      ["Total", "300,000", "206,000", "94,000", "68.7%"],
    ],
    styles: { fontSize: 9, cellPadding: 3 },
    headStyles: { fillColor: [30, 41, 59], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    margin: { left: 14, right: 14 },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Audience Demographics
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Audience Demographics", 14, y);
  y += 4;

  autoTable(doc, {
    startY: y,
    head: [["Segment", "Percentage", "Growth vs Q4", "Primary Platform"]],
    body: [
      ["Business Owners (25-44)", "38%", "+3.2%", "Telegram"],
      ["Corporate Executives (35-55)", "22%", "+1.8%", "LinkedIn"],
      ["Young Entrepreneurs (18-30)", "19%", "+5.4%", "Instagram"],
      ["Government & Policy Makers", "11%", "+0.9%", "Facebook"],
      ["International Partners", "6%", "+2.1%", "LinkedIn"],
      ["Students & Academics", "4%", "+1.6%", "YouTube"],
    ],
    styles: { fontSize: 9, cellPadding: 3 },
    headStyles: { fillColor: [30, 41, 59], textColor: 255 },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    margin: { left: 14, right: 14 },
  });

  y = (doc as any).lastAutoTable.finalY + 12;

  // Recommendations
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Recommendations for Q2 2026", 14, y);
  y += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);

  const recs = [
    "1. Increase Telegram investment by 25% — highest engagement rate (6.1%) and fastest follower growth across all platforms.",
    "2. Launch a dedicated Instagram Reels strategy — short-form video content drove 44% more views than Q4; capitalize on this momentum.",
    "3. Develop a member-generated content program — the Anbessa Shoes spotlight achieved 4.1% engagement, suggesting appetite for peer stories.",
    "4. Optimize email send times — A/B testing in January showed 18% higher open rates for Tuesday 10 AM sends vs. Thursday sends.",
    "5. Allocate remaining event promotion budget to Trade Fair 2026 push — early bird registrations exceeded target by 17%.",
    "6. Consider LinkedIn Ads for B2B lead generation targeting international partners segment, which grew 2.1% organically.",
  ];

  recs.forEach((rec) => {
    const recLines = doc.splitTextToSize(rec, pageWidth - 28);
    doc.text(recLines, 14, y);
    y += recLines.length * 4.5 + 3;
  });

  y += 8;

  // Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(14, y, pageWidth - 14, y);
  y += 8;
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text("AACCSA Digital Marketing Division  |  Confidential — For Internal Use Only", 14, y);
  doc.text("Contact: marketing@aaccsa.org  |  +251 11 551 8055", 14, y + 5);

  doc.save("AACCSA_Q1_2026_Campaign_Performance.pdf");
}
