/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/*
 * The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "NPL"); you may not use this file except in
 * compliance with the NPL.  You may obtain a copy of the NPL at
 * http://www.mozilla.org/NPL/
 *
 * Software distributed under the NPL is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the NPL
 * for the specific language governing rights and limitations under the
 * NPL.
 *
 * The Initial Developer of this code under the NPL is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation.  All Rights
 * Reserved.
 */

#include "prtypes.h"
#include "plarena.h"
#include "seccomon.h"
#include "mcom_db.h"
#include "certt.h"

PR_BEGIN_EXTERN_C

#include "nsZig.h"
#include "zig.h"

PR_END_EXTERN_C

//
// 			PUBLIC METHODS 
//

nsZig::nsZig(void * zig)
{
  itsNativeZig = zig;
}

void nsZig::destroyZignature(void * nativeZig)
{
  SOB_destroy((ZIG *)nativeZig);
}

nsZig::~nsZig(void)
{
  if (itsNativeZig != NULL) {
    nsZig::destroyZignature(itsNativeZig);
  }
  itsNativeZig = NULL;
}

void * nsZig::GetZig(void)
{
  return itsNativeZig;
}


//
// 			PRIVATE METHODS 
//
