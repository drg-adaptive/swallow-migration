import { LoadConfigParameters, ProcessorParams } from ".";
import { Logger } from "./Logger";

export interface ExecutionTrackerParams {
  executionTracker: ExecutionTracker;
  params: Record<string, string | ProcessorParams>;
}

export interface ExecutionTrackerInstance {
  markDone(script: string): Promise<void>;
  isDone(script: string): Promise<boolean>;
  remove(script: string): Promise<void>;
}

export type ExecutionTracker = <T = Record<string, string>>(
  params: T,
  logger: Logger
) => ExecutionTrackerInstance;
