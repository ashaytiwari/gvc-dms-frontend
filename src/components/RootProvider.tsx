"use client";

import React from 'react';

import { NextUIProvider } from "@nextui-org/react";

import useNetworkStatus from '@/hooks/useNetworkStatus';

import { IRootProviderProps } from '@/interfaces/uiInterfaces/generic';

import OfflineWindow from './offlineWindow/OfflineWindow';

const RootProvider: React.FC<IRootProviderProps> = (props) => {

  const { children } = props;

  const { isOnline } = useNetworkStatus();

  function renderChildNode() {

    if (isOnline === false) {
      return <OfflineWindow />
    }

    return (
      <>
        {children}
      </>
    );

  }

  return (
    <NextUIProvider>
      {renderChildNode()}
    </NextUIProvider>
  );

};

export default RootProvider;