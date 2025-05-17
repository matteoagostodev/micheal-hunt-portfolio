import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid, Area, AreaChart, Cell, PieChart, Pie } from 'recharts';
import SectionHeading from '../../components/SectionHeading';
import StatsCard from '../../components/StatsCard';

const performanceData = [
  { month: 'Jan', roas: 2.1, cpa: 32.5, ctr: 1.2 },
  { month: 'Feb', roas: 2.4, cpa: 30.1, ctr: 1.4 },
  { month: 'Mar', roas: 2.8, cpa: 28.7, ctr: 1.6 },
  { month: 'Apr', roas: 3.2, cpa: 27.3, ctr: 1.7 },
  { month: 'May', roas: 3.5, cpa: 25.8, ctr: 1.9 },
  { month: 'Jun', roas: 3.8, cpa: 24.2, ctr: 2.1 },
  { month: 'Jul', roas: 4.2, cpa: 23.0, ctr: 2.3 },
  { month: 'Aug', roas: 4.6, cpa: 21.5, ctr: 2.5 },
  { month: 'Sep', roas: 5.0, cpa: 19.8, ctr: 2.7 },
  { month: 'Oct', roas: 5.3, cpa: 18.4, ctr: 2.9 },
  { month: 'Nov', roas: 5.7, cpa: 17.2, ctr: 3.1 },
  { month: 'Dec', roas: 6.1, cpa: 16.0, ctr: 3.4 },
];

const audienceData = [
  { name: 'Women 25-34', value: 30 },
  { name: 'Men 25-34', value: 25 },
  { name: 'Women 35-44', value: 15 },
  { name: 'Men 35-44', value: 12 },
  { name: 'Women 18-24', value: 10 },
  { name: 'Men 18-24', value: 8 },
];

const PerformanceSection = () => {
  const [activeTab, setActiveTab] = useState<'roas' | 'cpa' | 'ctr'>('roas');
  
  const getDataKey = () => {
    return activeTab;
  };
  
  const getChartColor = () => {
    switch (activeTab) {
      case 'roas':
        return '#1877F2';
      case 'cpa':
        return '#C13584';
      case 'ctr':
        return '#F77737';
      default:
        return '#1877F2';
    }
  };
  
  const renderChart = () => {
    switch (activeTab) {
      case 'roas':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="roasGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1877F2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1877F2" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [`${value.toFixed(1)}x`, 'ROAS']}
                labelStyle={{ color: '#1877F2' }}
                contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="roas" stroke="#1877F2" fillOpacity={1} fill="url(#roasGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'cpa':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'CPA']}
                labelStyle={{ color: '#C13584' }}
                contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px' }}
              />
              <Line
                type="monotone"
                dataKey="cpa"
                stroke="#C13584"
                strokeWidth={2}
                dot={{ fill: '#C13584', r: 4 }}
                activeDot={{ r: 6, fill: '#C13584', stroke: 'white', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'ctr':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [`${value.toFixed(1)}%`, 'CTR']}
                labelStyle={{ color: '#F77737' }}
                contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px' }}
              />
              <Bar
                dataKey="ctr"
                fill="#F77737"
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };
  
  return (
    <section id="performance" className="py-16 md:py-24 px-4 lg:px-0">
      <div className="container mx-auto">
        <SectionHeading
          title="Performance Metrics"
          subtitle="Delivering consistent results across key performance indicators is what sets my campaigns apart. Here's a snapshot of my track record."
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
          <StatsCard
            value={6.1}
            suffix="x"
            label="Peak ROAS Achieved"
            gradientClass="from-facebook to-instagram-purple"
          />
          <StatsCard
            value={67}
            suffix="%"
            label="Average CTR Improvement"
            gradientClass="from-instagram-purple to-instagram-pink"
          />
          <StatsCard
            value={45}
            suffix="%"
            label="Average CPA Reduction"
            gradientClass="from-instagram-pink to-instagram-orange"
          />
          <StatsCard
            value={12}
            prefix="$"
            suffix="M+"
            label="Total Ad Spend Managed"
            gradientClass="from-instagram-orange to-facebook"
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="text-xl font-display font-semibold mb-4 md:mb-0">Performance Over Time</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('roas')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'roas'
                    ? 'bg-facebook text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                ROAS
              </button>
              <button
                onClick={() => setActiveTab('cpa')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'cpa'
                    ? 'bg-instagram-purple text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                CPA
              </button>
              <button
                onClick={() => setActiveTab('ctr')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'ctr'
                    ? 'bg-instagram-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                CTR
              </button>
            </div>
          </div>
          
          {renderChart()}
        </div>
        
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 className="text-xl font-display font-semibold mb-4">Audience Segmentation</h3>
          <p className="text-gray-600 mb-6">
            An example of strategic audience segmentation to diversify sales channels and maximize campaign effectiveness.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {audienceData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index % 2 === 0 ? '#C13584' : '#1877F2'} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value}%`, 'Audience Share']}
                    contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Key Audience Insights</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Women aged 25-34 show highest conversion rates, especially for beauty and lifestyle products</li>
                  <li>Men aged 25-34 have highest average order value, particularly for tech and fitness products</li>
                  <li>Segmenting audiences by interest clusters increased CTR by 42%</li>
                  <li>Lookalike audiences based on high-value customers reduced CPA by 37%</li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Optimization Strategy</h4>
                <p className="text-gray-600 mb-3">
                  My approach focuses on continuous refinement of audience segments based on performance data, with typical campaign structures including:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Interest-based segments</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Behavioral targeting</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Lookalike audiences</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Retargeting segments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
