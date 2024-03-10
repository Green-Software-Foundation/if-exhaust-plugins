/**
 * Base interface for exhaust plugins.
 */
export interface ExhaustPluginInterface {
  /**
   * Execute exhaust based `tree`, produce output to a file in `outputPath`.
   */
  execute(tree: any, context: any, outputPath?: string): void;
}
