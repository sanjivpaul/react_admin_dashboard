import React from 'react'
import "./sidebar.css"
import {
    LineStyle, Timeline, TrendingUp, PersonOutline, StorefrontOutlined, AttachMoneyOutlined, AssessmentOutlined, MailOutlineOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, ReportOutlined
} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                {/* dashboard */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem activate">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                {/* Quick menu */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className='sidebarIcon' />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontOutlined className='sidebarIcon' />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlined
                            className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                {/* Notification */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined
                            className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                {/* Staff */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
