import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';
import NewContent from './NewContent';
import NewContent3 from './NewContent3';
import NewContent1 from './NewContent1';
import NewContent2 from './NewContent2';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "首页", link: "#home" },
    { label: "关于我们", link: "#about" },
    { label: "服务", link: "#services" },
    { label: "联系我们", link: "#contact" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <div className='flex flex-col'>
          <NewContent></NewContent>
          <NewContent3></NewContent3>
           <NewContent1></NewContent1>
           <NewContent2></NewContent2>

          </div>
          </div>
        </div>
        </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */