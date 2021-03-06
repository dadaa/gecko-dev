/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef mozilla_dom_TelephonyDialCallback_h
#define mozilla_dom_TelephonyDialCallback_h

#include "Telephony.h"
#include "mozilla/dom/Promise.h"
#include "mozilla/dom/telephony/TelephonyCallback.h"
#include "nsAutoPtr.h"
#include "nsCOMPtr.h"
#include "nsITelephonyService.h"
#include "nsString.h"

class nsPIDOMWindow;

namespace mozilla {
namespace dom {
namespace telephony {

class TelephonyDialCallback MOZ_FINAL : public TelephonyCallback,
                                        public nsITelephonyDialCallback
{
public:
  NS_DECL_ISUPPORTS_INHERITED
  NS_DECL_NSITELEPHONYDIALCALLBACK

  TelephonyDialCallback(nsPIDOMWindow* aWindow, Telephony* aTelephony,
                        Promise* aPromise);

  NS_FORWARD_NSITELEPHONYCALLBACK(TelephonyCallback::)

private:
  ~TelephonyDialCallback() {}

  nsCOMPtr<nsPIDOMWindow> mWindow;
  nsRefPtr<Telephony> mTelephony;

  nsString mServiceCode;
};

} // namespace telephony
} // namespace dom
} // namespace mozilla

#endif // mozilla_dom_TelephonyDialCallback_h
