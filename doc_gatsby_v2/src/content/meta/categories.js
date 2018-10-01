import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';
import HomeIcon from 'react-feather/dist/icons/home';

export const categories = [
  { name: 'frontdoor', label: 'Welcome', icon: HomeIcon },
  { name: 'discover', label: 'Discover', icon: SettingsIcon },
  { name: 'install', label: 'Install', icon: SettingsIcon },
  { name: 'config', label: 'Configure', icon: SettingsIcon },
  { name: 'deploy', label: 'Deploy', icon: SettingsIcon },
  { name: 'concepts', label: 'Concepts', icon: SettingsIcon },
  { name: 'use', label: 'Common use', icon: SettingsIcon },
  { name: 'rolse', label: 'Use by role', icon: SettingsIcon }
];

export default categories;