import { Space } from "antd";
import { Link } from "gatsby";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramOutlined,
  MailFilled,
} from "@ant-design/icons";

import React from "react";

export const Sidebar = () => {
  return (
    <div>
      <h2 className="text-xl font-bold uppercase pb-2">Tadaluuu</h2>
      <p className="text-sm text-gray-400 leading-1">
        I am a developer and seller with more than 10 years of experience.
      </p>
      <p className="text-sm text-gray-400 leading-1">
        I am from Bac Ninh, Viet Nam.
      </p>
      <ul className="my-3">
        <li className="flex items-center">
          <ChevronRightIcon height={16} width={16} />
          <Link to="/" className="text-sm">
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRightIcon height={16} width={16} />
          <Link to="/about-me" className="text-sm">
            About me
          </Link>
        </li>
      </ul>
      <Space className="flex">
        <Link to="https://www.facebook.com/MrXongXao">
          <FacebookFilled className="text-xl" />
        </Link>
        <Link to="https://twitter.com/TaDaLuuu1">
          <TwitterCircleFilled className="text-xl" />
        </Link>
        <Link to="https://www.instagram.com/tadaluuu/">
          <InstagramOutlined className="text-xl" />
        </Link>
        <Link to="">
          <MailFilled className="text-xl" />
        </Link>
      </Space>
      <div className="mt-4 text-xs text-gray-500">
        ©2021 ChillGroup - Made By Tadaluuu
      </div>
    </div>
  );
};
