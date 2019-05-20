import { unstable_SealedInitialState } from "../utils/useSealedState";
import {
  useHiddenState,
  HiddenState,
  HiddenActions,
  HiddenInitialState
} from "../Hidden/HiddenState";

export type DialogState = HiddenState;

export type DialogActions = HiddenActions;

export type DialogInitialState = HiddenInitialState;

export type DialogStateReturn = DialogState & DialogActions;

export function useDialogState(
  initialState: unstable_SealedInitialState<DialogInitialState> = {}
): DialogStateReturn {
  return useHiddenState(initialState);
}

const keys: Array<keyof DialogStateReturn> = [...useHiddenState.__keys];

useDialogState.__keys = keys;
