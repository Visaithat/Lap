'use client';

import { useContext } from 'react';
import { LangContext } from './LanguageProvider';

export const useLang = () => useContext(LangContext);
