// Block explorer URLs for different chains
export const BLOCK_EXPLORERS: Record<string, string> = {
  "1": "https://etherscan.io/tx/", // Ethereum Mainnet
  "10": "https://optimistic.etherscan.io/tx/", // Optimism
  "42161": "https://arbiscan.io/tx/", // Arbitrum One
  "137": "https://polygonscan.com/tx/", // Polygon
  "8453": "https://basescan.org/tx/", // Base
  "43114": "https://snowtrace.io/tx/", // Avalanche
  "56": "https://bscscan.com/tx/", // BSC
  "250": "https://ftmscan.com/tx/", // Fantom
  "25": "https://cronoscan.com/tx/", // Cronos
  "1284": "https://moonscan.io/tx/", // Moonbeam
  "1285": "https://moonriver.moonscan.io/tx/", // Moonriver
};

// Chain names for display
export const CHAIN_NAMES: Record<string, string> = {
  "1": "Ethereum Mainnet",
  "10": "Optimism",
  "42161": "Arbitrum One",
  "137": "Polygon",
  "8453": "Base",
  "43114": "Avalanche",
  "56": "BSC",
  "250": "Fantom",
  "25": "Cronos",
  "1284": "Moonbeam",
  "1285": "Moonriver",
};

/**
 * Get the block explorer URL for a specific chain and transaction hash
 * @param chainId - The chain ID (e.g., "1", "8453", "137")
 * @param txHash - The transaction hash
 * @returns The full block explorer URL or null if chain not supported
 */
export function getBlockExplorerUrl(chainId: string, txHash: string): string | null {
  const baseUrl = BLOCK_EXPLORERS[chainId];
  if (!baseUrl) {
    console.warn(`Unsupported chain ID: ${chainId}`);
    return null;
  }
  return `${baseUrl}${txHash}`;
}

/**
 * Get the chain name for display purposes
 * @param chainId - The chain ID
 * @returns The chain name or "Unknown Chain" if not found
 */
export function getChainName(chainId: string): string {
  return CHAIN_NAMES[chainId] || "Unknown Chain";
}

/**
 * Get the block explorer name for display purposes
 * @param chainId - The chain ID
 * @returns The explorer name (e.g., "Etherscan", "Basescan", "Arbiscan")
 */
export function getExplorerName(chainId: string): string {
  const explorerNames: Record<string, string> = {
    "1": "Etherscan",
    "10": "Optimistic Etherscan",
    "42161": "Arbiscan",
    "137": "Polygonscan",
    "8453": "Basescan",
    "43114": "Snowtrace",
    "56": "BSCScan",
    "250": "FTMScan",
    "25": "Cronoscan",
    "1284": "Moonscan",
    "1285": "Moonriver Moonscan",
  };
  return explorerNames[chainId] || "Block Explorer";
}
